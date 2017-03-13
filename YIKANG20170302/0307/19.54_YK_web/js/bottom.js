/**
 * Created by Administrator on 2017/3/4.
 */
window.onload = function () {
    liClick();
};
function liClick() {
    var lis = document.querySelectorAll('.bottom>li');
    console.log(lis)
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'textColor';
        };
    }

}