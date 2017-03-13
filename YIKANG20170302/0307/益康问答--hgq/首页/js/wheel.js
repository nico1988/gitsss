/*轮播图 Begin*/

/*
 * 1.自动轮播
 * 2.点盒子更随图片
 * 3.可拖动
 * 4.拖动如果小于图片的3/1,自动吸附回去,大于3/1,向左或右滑动一张*/

//封装添加过渡方法
function addTransition(element) {
    element.style.transition = 'all .2s';
    element.style.webkittransition = 'all .2s';
}
//封装停止过渡方法
function removerTransition(element) {
    element.style.transition = 'none';
    element.style.webkittransition = 'none';
}
//封装移动盒子
function setTransform(element, x) {
    element.style.transform = 'translateX(' + x + 'px)';
}

/*获取大盒子*/
var wheelBox = document.querySelector('.wheelBox');
/*获取装图片的盒子*/
var imgBox = wheelBox.querySelector('ul:nth-child(1)');
/*获取li标签*/
var lis = imgBox.querySelectorAll('li');

/*获取点盒子*/
var dropBox = wheelBox.querySelector('ul:nth-child(2)');
/*获取点的li标签*/
var drops = dropBox.querySelectorAll('li');

//贯穿全局的变量
var index = 1;

//手指点击的位置
var startX;
//手指滑动的位置
var moveX;

/*移动的距离*/
var distanceX = 0;
//是否滑动过
var ismove = false;

/*大盒子的宽度*/
var boxWidth = wheelBox.offsetWidth;

setTransform(imgBox, -boxWidth);


/*自动轮播*/
var timer = null;

timer = setInterval(function () {
    index++;
    addTransition(imgBox);//开启过渡
    setTransform(imgBox, -index * boxWidth); //移动,根据索引*盒子的宽度
}, 1000);

imgBox.addEventListener('webkitTransitionEnd', function () {
    if (index >= 5) {//判断,如果是最后一张,就瞬间跳到索引为1;
        index = 1;
    } else if (index <= 0) {
        index = 4;
    }
    //关闭过渡
    removerTransition(imgBox);
    //瞬间定位到第一张或者最后一张
    setTransform(imgBox, -index * boxWidth);

    /*点盒子跟随图片*/
    for (var i = 0; i < drops.length; i++) {
        drops[i].className = '';
        drops[index - 1].className = 'now';
    }
});

/*手指滑动图片*/
wheelBox.addEventListener('touchstart', function (event) {
    clearInterval(timer);
    startX = event.touches[0].clientX
});
wheelBox.addEventListener('touchmove', function (event) {
    clearInterval(timer);
    ismove = true;
    moveX = event.touches[0].clientX;
    //移动的距离 = 初始距离 - 滑动的距离
    distanceX = moveX - startX;

    //手指滑动后进行定位
    //停止动画
    clearInterval(timer);
    //停止过渡
    removerTransition(imgBox);
    setTransform(imgBox, (-index * boxWidth) + distanceX);
});
window.addEventListener('touchend', function (event) {

    if (Math.abs(distanceX) > boxWidth / 5 && ismove) {
        if (distanceX > 0) {
            index--;
        } else {
            index++;
        }
        addTransition(imgBox);//开启过渡
        setTransform(imgBox, -index * boxWidth); //移动,根据索引*盒子的宽度

    } else {
        addTransition(imgBox);//开启过渡
        setTransform(imgBox, -index * boxWidth); //移动,根据索引*盒子的宽度
    }

    //重置所有参数, 防止第二次的时候影响计算*/
    startX = 0;
    moveX = 0;
    distanceX = 0;
    ismove = false;
    //启用动画
    clearInterval(timer);
    timer = setInterval(function () {
        index++;
        addTransition(imgBox);//开启过渡
        setTransform(imgBox, -index * boxWidth); //移动,根据索引*盒子的宽度
    }, 1000);


});


/*轮播图 End*/


