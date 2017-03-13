

window.onload=function () {
// 公共回答  收听/点赞 span 值增加  并只能点击一次、
    var　answer=document.querySelector(".answer");
    var  top=document.querySelector(".top");
    var  message=top.querySelector(".top_f_left>.message");
    var audio=top.querySelector("audio");
    var i=message.querySelector("i");
    // console.log(message);
    var  mspan=message.querySelector("span");
    var bottom=answer.querySelector(".bottom");
    var sp=bottom.querySelector(".bottom_f_right");
    var spans=sp.querySelectorAll("span");
    // console.log(spans[0]);
    spans[0].onclick=function () {
        var index=spans[0].innerText;
        // console.log(index);
        index++;
        spans[0].innerHTML=index;
    };
    spans[1].onclick=function () {
        var index=spans[1].innerText;
        // console.log(index);
        index++;
        spans[1].innerHTML=index;
    };
    var timer=null;
    var flag=false;
    var index=60;
    var display=true;
    message.onclick=function () {
        clearInterval(timer);
        if(!flag){
            audio.play();
            flag=true;
            timer=setInterval(function () {
                index--;
                display=!display;
                if(!display){
                    i.style.opacity=0;
                }else {
                    i.style.opacity=1;
                }
                mspan.innerHTML=index+'"';
                if(index==0){
                    index=60;
                    audio.pause();
                    clearInterval(timer);
                    mspan.innerHTML=index+'"';
                }
            },1000)
        }
        else {
            audio.pause();
            flag=false;
            clearInterval(timer);
        }
    };
};