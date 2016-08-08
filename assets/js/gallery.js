var THUMBS = 'gallery/thumbs/';
var FULL   = 'gallery/fullsize/';

$(document).ready(function () {
    var galleryOuter = $('#galleryOuter');

    // galleryOuter.isotope({
    //     itemSelector: '.gallery-panel',
    //     layoutMode: 'fitRows'
    // });

    $.getJSON("gallery/images.json", function (data) {
        data.forEach(function (elem, index) {
            var galleryPanel = $('<a class="gallery-panel">');

            galleryPanel.attr('id', ('galleryPanel' + index));
            galleryPanel.attr('href', (FULL + elem.fullsize));
            galleryPanel.attr('style', ('background-image: url(' + THUMBS + elem.thumb + ')'));

            galleryOuter.append(galleryPanel);
        });
    });


});
