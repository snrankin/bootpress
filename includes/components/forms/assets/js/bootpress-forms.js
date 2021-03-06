"use strict";
require("core-js/modules/es.array.filter");
require("core-js/modules/es.array.find");
jQuery(function ($) {
    $(document).ready(function () {
        $('.checkbox').each(function () {
            var check = $(this).find('input[type="checkbox"]');
            $(this).addClass('custom-control').addClass('custom-checkbox').prepend(check);
            $(this).children('input').addClass('custom-control-input');
            $(this).children('label').addClass('custom-control-label');
        });
        $('.radio').each(function () {
            var radio = $(this).find('input[type="radio"]');
            $(this).addClass('custom-control').addClass('custom-radio').prepend(radio);
            $(this).children('input').addClass('custom-control-input');
            $(this).children('label').addClass('custom-control-label');
        });
        $('.custom-control-label').each(function () {
            $(this).wrapInner('<span class="custom-control-label-text"></span>').prepend('<span class="custom-control-icon"></span>');
        });
        $('.select-2').select2({
            theme: 'bootstrap4'
        });
        $.fn.select2.defaults.set('theme', 'bootstrap4');
        bsCustomFileInput.init();
    });
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() == false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
});