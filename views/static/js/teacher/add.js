define(["jquery", "template", "utils", "form", "datepicker", "datepickerCN", "validate"], function($, template, utils) {
    var id = utils.getQueryByKey("id");
    //添加
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
        });
        registeFormValidate();
    } else {
        //编辑
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
                    });
                    registeFormValidate();
                }
            }
        })
    }

    // $(".body.teacher").on("submit", "form", function() {



    //     return false;
    // })
    function registeFormValidate() {
        //表单验证事件的注册
        $("form").validate({
            onKeyup: true,
            onChange: true,
            onBlur: true,
            sendForm: false,
            description: {
                name: {
                    required: "请输入讲师名称",
                    valid: ""
                },
                pass: {
                    required: "请输入密码",
                    pattern: "密码必须是6-18位的字母或数字"
                }
            },
            eachValidField: function() {
                this.parent().parent().addClass("has-success").removeClass("has-error");
            },
            eachInvalidField: function() {
                this.parent().parent().addClass("has-error").removeClass("has-success");
            },
            valid: function() {
                // console.log(this);
                this.ajaxSubmit({
                    success: function(data) {
                        if (data.code == 200) {
                            //跳转列表页
                            location.href = "/teacher/list"
                        }
                    }
                })
            }
        })
    }

});