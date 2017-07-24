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

        //退出
        $("#logoutbtn").click(function() {
            $.ajax({
                url: "/api/logout",
                type: "post",
                success: function(data) {
                    if (data.code == 200) {
                        location.href = "/dashboard/login";
                    }
                }
            })
        })

        //侧边栏点击下拉列表显示
        $(".navs>ul>li>ul").parent().click(function() {
            $(this).children("ul").slideDown();
        })

        //当前li高亮
        var path = location.pathname;
        if (path == "/") {
            path = "/dashboard/index";
        }
        var activeLi = $(".navs a[href='" + path + "']");
        activeLi.addClass("active");
        //判断当前菜单是否是一个二级菜单项，如果是，就让二级菜单打开
        var activeUl = activeLi.parent().parent();
        if (activeUl.siblings("a").length == 1) {
            activeUl.slideDown();
        }

        //给查看注册事件


    });
})