window.onload = function () {
    clickListen();
};


//点击改为以收听,收听人数,动态改变
function clickListen() {
//获取元素,收听取消按钮
    var listen = document.querySelectorAll('.listen');
    setTimeout(function () {
        for (var i = 0; i < listen.length; i++) {
            //    获取收听人数
            listen[i].addEventListener('click', function () {
                //this.querySelector('.icon_').click = function (event) {
                //    event.preventDefault();
                //}
                this.querySelector('.icon_');
                var num = this.parentNode.querySelector('.person');
                var h3 = num.nextElementSibling;
                /*点击之后,收听的人数加 1 */
                var temp = parseInt(num.innerHTML);
                if (this.innerHTML == '已收听') {
                    this.innerHTML = '<a href="#" class="icon_">收听</a>';
                    num.className = 'person';
                    temp--;
                } else {
                    this.innerHTML = '已收听';
                    h3.style.display = 'block';
                    animation(h3, -80, function () {
                        h3.style.top = '-20px';
                        h3.style.display = 'none';
                    });
                    var n = (num.className);
                    n += ' animated wobble';
                    num.className = n;
                    temp++;
                }

                num.innerHTML = temp;
                //num.className = '';
            });
        }
    }, 500)

}

function animation(element, destination, fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        //当前元素的top值
        var Top = window.getComputedStyle(element, null).top;
        Top = parseInt(Top);
        Top--;
        if (Top > destination) {
            element.style.top = Top + 'px';
        } else {
            fn && fn();
            clearInterval(element.timer);
        }
    }, 10);
}

