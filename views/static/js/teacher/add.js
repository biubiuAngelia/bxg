define(["jquery", "template", "utils", "form", "datepicker", "datepickerCN"], function($, template, utils) {
    var id = utils.getQueryByKey("id");

    if (!id) {
        var obj = {
            title: "讲师添加",
            btnText: "添 加",
            url: "/api/teacher/add"
        };
        var html = template("teacheraddTpl", obj);
        $(".teacher.body").html(html);
        $("input[name=tc_join_date]").datepicker({
            language: "zh-CN",
            format: "yyyy-mm-dd"
        })
    } else {
        $.ajax({
            url: "/api/teacher/edit",
            data: {
                tc_id: id
            },
            success: function(data) {
                if (data.code == 200) {
                    data.result.title = "讲师编辑";
                    data.result.btnText = "保存";
                    data.result.url = "/api/teacher/update";
                    var html = template("teacheraddTpl", data.result);
                    $("#teacheradd").html(html);
                    $("input[name=tc_join_date]").datepicker({
                        language: "zh-CN",
                        format: "yyyy-mm-dd"
                    })
                }
            }
        })
    }

});