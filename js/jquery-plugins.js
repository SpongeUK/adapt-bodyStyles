define(["jquery", "underscore"], function ($, _) {
    $.fn.removeAllClasses = function (options) {
        options = $.extend({
            match: /./gi
        }, options);

        var findClasses = (options.match.constructor === RegExp) ? options.match.test.bind(options.match) : (typeof options.match !== 'function') ? function identity(item) { return item === options.match; } : options.match,
            classes = _.filter((this.attr('class') || '').split(' '), findClasses).join(' ');

        this.removeClass(classes);

        return this;
    };
    return $;
});