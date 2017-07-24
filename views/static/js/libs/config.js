require.config({
    baseUrl: "/views/assets",
    paths: {
        "jquery": "jquery/jquery.min",
        "cookie": "jquery-cookie/jquery.cookie",
        "template": "artTemplate/template-web",
        "form": "jquery-form/jquery.form",
        "bootstrap": "bootstrap/js/bootstrap.min",
        "utils": "../static/js/libs/utils",
        "datepicker": "bootstrap-datepicker/js/bootstrap-datepicker.min",
        "datepickerCN": "bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "datepickerCN": {
            deps: ["jquery"]
        }
    }
})