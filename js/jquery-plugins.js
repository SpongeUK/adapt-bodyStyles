define(["jquery"], function ($) {
    $.fn.removeAllClasses = function (options) {
        options = $.extend({
            match: /./gi
        }, options);

        var findClasses = (options.match.constructor === RegExp) ? options.match.test.bind(options.match) : (typeof options.match !== 'function') ? function identity(item) { return item === options.match; } : options.match,
            classes = (this.attr('class') || '').split(' ').filter(findClasses).join(' ');

        this.removeClass(classes);

        return this;
    };
    return $;
});