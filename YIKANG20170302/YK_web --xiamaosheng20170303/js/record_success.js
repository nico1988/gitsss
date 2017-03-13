/**
 * Created by my on 2017/3/9.
 */
window.onload = function () {
    refuse();/*点击决绝调用*/
    confirm();/*点击确认*/
    Prompt();/*温馨提示*/
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
            p.innerHTML = "不应该说写点什么嘛";
            reason.appendChild(p);
        }
    })
}
/*-----------点击确认动态增加回答-----------*/
/*-----------点击确认发送-----------*/
function Prompt(){
    var sureSend = document.getElementById("sure_send");
    var prompt = document.getElementById("prompt");/*获取弹出框*/
    var prompt_con = document.getElementById("prompt_con");/*获取弹出框*/
    sureSend.addEventListener("click",function(){
        prompt.style.display = "block";/*显示遮罩*/
    })
    var think  = document.getElementById("re_think");/*获取我在想想*/
    think.addEventListener("click",function(){
        prompt.style.display = "none";/*显示遮罩*/
    })
    var con_firm = document.getElementById("con_firm");/*获取确认*/
    con_firm.addEventListener("click",function(){
        prompt.style.display = "none";/*显示遮罩*/
    })
}
/*-----------点击确认发送-----------*/
