
(function ($) {
    "use strict";

    var base = document.createElement('base');
    base.href = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    document.getElementsByTagName('head')[0].appendChild(base);

    $('#menuSelector').change(function() {
        this.base + '/' + $(this).val();
        window.location.href = route;
    });

})(jQuery);