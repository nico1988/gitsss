//搜索栏 Begin
/*
 * 1.获取用户输入的内容
 * 2.匹配后台的数据
 * 3.有相同的关键字获取并现实出来
 * */
search();
function search() {
    /*获取元素*/
    var searchBox = document.querySelector('.searchBox');
//form表单
    var search_form = searchBox.querySelector('form');
//input输入框
    var search_inp = search_form.querySelector('input');
    /*显示后台的内容的ul*/
    /*获取搜索按钮*/
    //var searchBtn = searchBox.querySelector('a');
    var lis; //动态创建的li标签


    search_inp.addEventListener('input', function () {
        //获取用户输入的内容
        var text = search_inp.value;
        //console.log(text);
        /*后台数据*/
        var json = ['a', 'ab', 'abc', 'abcd', 'abec', 'abcdef'];

        var memory = [];  //用于存储于文本框内的值相同的字符串；



        /*将用户的内容于后台进行匹配*/
        for (var i = 0; i < json.length; i++) {
            if (json[i].indexOf(text) === 0) {
                memory.push(json[i]);
                /*将匹配的到数添加到数组中*/
            }
        }
        /*创建ul标签*/
        var ul = search_form.querySelector('ul');
        if (ul) {
            search_form.removeChild(ul);
            /*每次更新数据时,删除以前的数据*/
        }

        if (memory.length == 0) {
            return;
            /*如果追加到数组中没有内容,则结束*/
        }
        if (text.length == 0) {
            return;
            /*如果用户没有输入内容,则结束*/
        }
        /*创建ul标签*/
        var ul = document.createElement('ul');
        /*根据后台的数据动态创建li标签*/
        for (var i = 0; i < memory.length; i++) {
            if (i < 3) {
                var li = document.createElement('li');
                li.innerHTML = memory[i];
                /*将后台的内容添加到li的内容中*/
                ul.appendChild(li);//ul追加li标签
            }
            /*获取所有的动态创建的li标签*/
            lis = ul.querySelectorAll('li');
        }
        search_form.appendChild(ul);
        /*将动态创建的ul添加到表单中*/
        /*当点击表单之外时,将提示的内容隐藏*/
        document.addEventListener('touchstart', function (event) {
            ul.style.display = 'none';
        });
        /*当点击form表单是,显示提示的内容*/
        search_form.addEventListener('touchstart', function (event) {
            ul.style.display = 'block';
            /*点击显示*/
            /*阻止父元素的事件冒泡,父元素的冒泡事件:当点击页面时,将提示的内容隐藏**/
            event.stopPropagation(search_form);
        });

        //li标签排他事件
        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener('touchstart', function () {
                search_inp.value = this.innerHTML;
                search_form.removeChild(search_form.querySelector('ul'));
            });
        }
    });
}


//搜索栏 End
