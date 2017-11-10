// 该文件的功能是用来写首页的js交互的
//1.进度条
//不要让进度条显示圆圈
NProgress.configure({ showSpinner: false});

//全局监听  当页面中某一个ajax请求发起的时候，进度条开始
$(window).ajaxStart(function(){
    NProgress.start();
})

//当ajax请求完成的时候让进度条完成
$(window).ajaxComplete(function(){
    NProgress.done();
})

//2.功能：点击左侧菜单按钮，让其左侧侧边栏消失
$('[data-menu]').on('click',function(){
    $('.lt-aside').toggle();
    $('.lt-section').toggleClass('menu');
})

//3.功能：点击分类管理，滑出一级分类和二级分类
$('.lt-aside .menu').on('click','[href="javascript:;"]',function(){
    var _this = $(this);
    var child =_this.siblings();
    child.slideToggle();
})
//4.功能：点击退出登录的按钮，弹出提示框

//点击提示框里面的确定按钮，跳转页面
$('.btn-primary').on('click', function () {
    window.location.href = 'text.html';
})


