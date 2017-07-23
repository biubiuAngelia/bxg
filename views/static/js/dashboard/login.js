define(["jquery", "cookie"], function($) {
    $(function() {
        //1. 获取表单，注册提交事件
        $("form").submit(function() {
            //2. 获取用户名和密码 发送ajax请求
            // var name = $("[name=tc_name]").val();
            // var pass = $("[name=tc_pass]").val();
            $.ajax({
                url: "/api/login",
                type: "post",
                // data: {tc_name: name, tc_pass: pass},
                data: $(this).serialize(),
                success: function(data) {
                    //3. ajax回调处理
                    if (data.code == 200) {
                        //把用户名和头像存入到cookie当中
                        //$.cookie不能将对象直接存入cookie中
                        //需要先使用JSON.stringify将其转换成json格式的字符串！
                        $.cookie("userInfo", JSON.stringify(data.result), { path: "/" });

                        location.href = "/";
                    }
                }
            })

            //阻止表单的默认事件
            return false;
        })

    })
})