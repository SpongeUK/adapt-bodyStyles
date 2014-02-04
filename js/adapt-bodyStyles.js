/*
* adapt-bodyStyles
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Chris Jones chris.jones@spongeuk.com
*/

define(["coreJS/adapt", "./jquery-plugins"], function (Adapt, $) {
    var previousLocation = null;

    Adapt.on('router:menu', function () {
        $('body').removeAllClasses({ match: /^location/i }).addClass('location-menu');
    });

    Adapt.on('router:page', function (page) {
        var id = page.get('_id');

        $('body').removeAllClasses({ match: /^location/i }).addClass('location-page');
        $('body').removeClass(previousLocation).addClass(id);
        previousLocation = id;
    });
    
});