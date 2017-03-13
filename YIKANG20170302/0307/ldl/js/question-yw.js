// .question_yw_rach ul li a
window.onload=function () {
  var que=document.querySelector(".question_yw_rach");
   var ul=que.querySelector("ul");
    var lis=ul.querySelectorAll("li");
    var answer=document.querySelector(".answer");
    var r_que=document.querySelector(".r_question");
    var copy=document.querySelector(".copy");
    //反复点击弹出提示框
    var more=r_que.querySelector(".moren");
    var news=r_que.querySelector(".new");
    var b=null;
    var a=null;
    var idnex=0;
    lis[0].onclick=function () {

        idnex++;
        if(idnex>1){
        }else {
            b = answer.cloneNode(true);
            console.log(b);
            a = copy.cloneNode(true);
            console.log(a);
            r_que.removeChild(answer);
            r_que.appendChild(a);
            lis[0].style.color = "#44b181"
        }
    };
    lis[2].onclick=function () {
        idnex++;
        if(idnex>1){
            alert("已经是最新")
        }else {
            r_que.removeChild(copy);
            r_que.appendChild(a);
            r_que.appendChild(b);
        }

    };
};