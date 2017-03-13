window.onload = function () {
    contentAutoplay();
};

//点击后改为5秒后自动播放
//弹出播放框(全屏的)
//点击关闭按钮可关闭,且关闭播放
function contentAutoplay() {
    /*所有获取语音框*/
    var uppick = document.querySelectorAll('.uppick');
    var is = true;
    var timer = null;
    //遍历语音框
    for (var i = 0; i < uppick.length; i++) {
        //给所有的语音框绑定事件
        uppick[i].addEventListener('click', function () {
            if (is) {
                /*下一个兄弟元素*/
                var listenPerson = this.nextElementSibling;
                /*获取已听人数元素*/
                var b = listenPerson.querySelector('b');
                var number = b.innerHTML;
                number = parseInt(number);//将获取到的人数转换为整数
                number++;//收听的人数加1;
                //重新赋值到已收听人数中
                b.innerHTML = number;
                console.log(b);
                is = false;
                var thisT = this;
                //给点击播放当前的语音框
                var span = this.querySelector('span');
                //倒计时5秒后自动播放
                var b = 4;
                timer = setInterval(function () {
                    span.innerHTML = b + '秒后自动播放';
                    if (b <= 1) {
                        clearInterval(timer);
                        /*将播放框扩大*/
                        var num1 = 10;
                        var timer1 = setInterval(function () {
                            span.innerHTML = '正在播放播放' + num1;
                            thisT.style.webkitTransform = 'translateX(30px) scale(1.5)';

                            if (num1 <= 0) {
                                clearInterval(timer1);
                                span.innerHTML = '限时免费播放';
                                thisT.style.webkitTransform = 'translateX(0) scale(1)';
                                is = true;
                            }
                            num1--;
                        }, 1000);
                    }
                    b--;
                }, 1000);
            } else {
            }


        });
    }

}