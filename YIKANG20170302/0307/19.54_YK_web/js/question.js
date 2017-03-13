/**
 * Created by 曾伟 on 2017/3/7.
 */
function Text(){
    var text =document.querySelector("#status");
    text.onclick = function () {
        this.innerHTML = ""  /*清空原本存在的内容*/
    };
    function countChar(textareaName,spanName)
    {
        var sum = document.getElementById(spanName).innerHTML = 60- document.getElementById(textareaName).value.length;
        if(sum<=0){
            text.disabled = true;/*字数达到限制禁用文本框 并弹出警告*/
            alert("对不起，最多能输入60个字符")
        }
    }
}




