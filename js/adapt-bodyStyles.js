/*
* adapt-bodyStyles
* License - http://github.com/adaptlearning/adapt_framework/LICENSE
* Maintainers - Chris Jones chris.jones@spongeuk.com
*/

define(["coreJS/adapt", "./jquery-plugins"], function (Adapt, $) {

    Adapt.on('router:menu', function () {
        $('body').removeAllClasses({ match: /^location/i }).addClass('location-menu');
    });

    Adapt.on('router:page', function (page) {
        $('body').removeAllClasses({ match: /^location/i }).addClass('location-page').addClass('location-id-'+page.get('_id'));
    });
    
});