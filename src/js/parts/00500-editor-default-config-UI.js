// 对象配置
_e(function (E, $) {

    E.fn.initDefaultConfig = function () {
        var editor = this;
        editor.config = $.extend(true, {}, E.config);
        editor.UI = $.extend(true, {}, E.UI);
    };

});
