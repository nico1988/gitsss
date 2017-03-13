/**
 * Created by my on 2017/3/9.
 */
window.onload = function () {
    refuse();/*点击拒绝*/
    record();/*点击录音*/
    confirm();/*点击确认*/
    textarea()/*输入框*/
}
function refuse(){
    /*拒绝回答*/
    var refuse = document.getElementById("refuse");/*获取拒绝回答按钮*/
    var refuseJumpOut = document.getElementById("refuse_ans");/*获取弹出框*/
    var reThink = document.getElementById("rethink");/*获取弹出框*/
    var refuseCon = document.getElementById("refuse_con");/*获取弹出框*/
    refuse.onclick = function(){/*点击拒绝回答触发事件*/
        refuseJumpOut.style.display = "block";/*显示遮罩*/
        refuseCon.classList.remove("jumpOut");
        refuseCon.classList.add("jumpDown");/*对话框添加动画*/
//        refuseCon.classList.remove("jumpOut");/*对话移除动画*/
    }
    /*点击我再想想,执行动画隐藏*/
    reThink.onclick = function(){/*点击拒绝回答触发事件*/
        /*1、点击 再想想时先跳上去 */
        /*1、同时移除跳出动画的class*/
        /*3、提出之后执行隐藏背景*/
        /*
         * bug1 再次点击后不会有缓动隐藏效果
         *
         *      结果查明是由于每一次动画借宿都会触发弹出框的动画结束事件
         *      加一个器解决问题^_^
         * */
        refuseCon.classList.add("jumpOut");
        refuseCon.classList.remove("jumpDown");
        setTimeout(function(){
            refuseJumpOut.style.display = "none";
        },800)
        var reason = document.getElementById("reason");/*获取确认键*/
        reason.value = "";/*最后一步清楚输入的原因*/
    }

}
/*输入框事件*/
function textarea(){
    var count = document.getElementById("count");/*获取改变的数字*/
    var textArea = document.getElementById("reason");/*获取输入框*/
    var str = null;/*文本框输入的字*/
    var limit = document.getElementById("limit");/*获取输入框*/
    var arr = ["他妈的","妈的","我cao","我操"]
    /*
     * bug 1 字数超限后提示字体超限，删除字数不能消除--给判断中加limit的innertext为空解决
     *
     * */
    textArea.addEventListener("keyup",function (e) {
        str = textArea.value;/*文本框输入内容*/
        /*----------判断输入----------*/

        /*----------判断输入----------*/
        if((30-str.length) >=0){
            count.innerText = parseInt(30-str.length);
            count.style.color = "";/*每次判断首先清除颜色，防止添加颜色后不消除*/
            count.style.backgroundColor = "";/*每次判断清除背景色，防止背景色不消除*/
            if(str.length>=20) {/*字数大于20字的时候提示蓝色字体*/
                count.style.color = "blue";
                count.style.backgroundColor = "silver";
                limit.innerText = ""
            }
        }
        else{
            console.log("字数超过限制了");
            textArea.value = str.substring(0,30);
            limit.innerText = "字数超限"
        }
    })
}
function record(){
    /*录音部分*/
    var timer = null;/*定时器*/
    var timerColor = null;
    var recorderCircle = document.querySelector("#record-circle");/*获取录音按键*/
    var colu = document.querySelector("#colu");/*获取录音按键*/

    /*触摸录音按钮事件*/
    recorderCircle.addEventListener("touchstart",function(){
//            console.log("touchstart");
        /*按下800毫秒后让话筒背景变红色*/
        timerColor=setTimeout(function(){
            recorderCircle.classList.toggle("red");
            timer = setInterval(function(){/*每隔500毫秒让话筒交替变色*/
                colu.classList.toggle("silver");
            },500)
        },1000)
    });
    recorderCircle.addEventListener("touchmove",function(){

    });
    recorderCircle.addEventListener("touchend",function(){
        console.log("touchend");
        recorderCircle.classList.toggle("red");
        colu.classList.remove("silver");
        clearInterval(timer);/*内层定时器*/
        clearInterval(timerColor);/*清除话筒变色*/
    });
}
/*-----------点击确认动态增加回答-----------*/
function confirm(){
    var confirm = document.getElementById("confirm");/*获取确认键*/
    var answer = document.getElementById("answer");/*获取问答父元素*/
    var reason = document.getElementById("reason");/*获取确认键*/
    var areYouSure = document.createElement("p");
    confirm.addEventListener ("click",function(){/*确认点击事件*/
        if(reason.value){
            var answerCon = document.createElement("div");
            var span1 = document.createElement("span");
            span1.innerHTML = "免费追问";
            answerCon.appendChild(span1);
            var p = document.createElement("p");
            p.innerHTML = reason.value;/*为动态的元素创建内容*/
            answerCon.appendChild(p);
//                var time = new getTime();
            var span2 = document.createElement("span");
            span2.innerHTML = Date();/*回答时间*/
            answerCon.appendChild(span2);
            answerCon.className = "answer-content";
            answer.appendChild(answerCon);
            var refuseJumpOut = document.getElementById("refuse_ans");/*获取弹出框*/
            refuseJumpOut.style.display = "none";/*确定后隐藏遮罩*/
            reason.value = "";/*最后一步清除输入的原因*/
        }else{
            alert("请输入拒绝理由");
            p.innerHTML = "不应该说写点什么嘛"
            reason.appendChild(p);
        }
    })
}
/*-----------点击确认动态增加回答-----------*/
