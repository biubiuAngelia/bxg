define(["jquery", "template", "bootstrap"], function($, template) {
    $.ajax({
        url: "/api/teacher",
        type: "get",
        success: function(data) {
            console.log(data);
            template.defaults.imports.getage = function(birthday) {
                var now = new Date();
                birthday = new Date(birthday);
                var age = now.getFullYear() - birthday.getFullYear();
                return age;
            }
            var html = template("teacherlistTpl", data);
            $("#teacherlistBody").html(html);
        }
    })

    //给查看按钮注册点击事件
    $("#teacherlistBody").on("click", ".btn-checkinfo", function() {
        var tc_id = $(this).parent().data("id");
        $.ajax({
            url: "/api/teacher/view",
            data: {
                tc_id: tc_id
            },
            success: function(data) {
                console.log(data);
                if (data.code == 200) {
                    var html = template("teacherinfoTpl", data.result);
                    $("#teacherinfo").html(html);
                    $("#teacherModal").modal("show");
                }
            }
        })
    })

    //启用和注销
    $("#teacherlistBody").on("click", ".btntoggle", function() {
        var tc_id = $(this).parent().data("id");
        var tc_status = $(this).data("status");

        var that = this;
        $.ajax({
            url: "/api/teacher/handle",
            type: "post",
            data: {
                tc_id: tc_id,
                tc_status: tc_status
            },
            success: function(data) {
                if (data.code == 200) {
                    if (data.result.tc_status == "0") {
                        $(that).text("注销").removeClass("btn-success").addClass("btn-warning");

                    } else {
                        $(that).text("启用").removeClass("btn-warning").addClass("btn-success");
                    }
                }
            }
        })
    })

})