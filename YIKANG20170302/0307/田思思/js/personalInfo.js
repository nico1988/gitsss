window.onload= function () {
myTitle();
}
function myTitle(){
    var titleBox=document.querySelector('.title_box>textarea');
    var numBox=document.querySelector('.title_box i');
    console.log(numBox);
    titleBox.onkeyup= function () {
        var text=this.value;
        var textLength=text.length;
        console.log(textLength);
        if(textLength<=18){
            numBox.innerHTML=textLength;
        }else{
            this.value=text.substr(0,100);
        }

    }
}