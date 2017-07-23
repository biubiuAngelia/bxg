define(["jquery", "template", "cookie"], function($, template) {
    $(function() {
        //判断用户当前在哪个页面
        //如果不在登录页面才执行下面的这段代码
        if (location.pathname != "/dashboard/login") {

            //判断用户到底登录还是没登录
            if (!$.cookie("PHPSESSID")) {
                location.href = "/dashboard/login";
                return;
            }

            //获取cookie中存储的用户信息，使用模板渲染
            var userInfo = JSON.parse($.cookie("userInfo"));
            var html = template("userinfo-tpl", userInfo);
            $("#profile").html(html);
        }
    });
})