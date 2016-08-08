var THUMBS = 'gallery/thumbs/';
var FULL   = 'gallery/fullsize/';

$(document).ready(function () {
    var galleryOuter = $('#galleryOuter');

    $.ajax({
        url : FULL,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if(val.match(/\.(jpe?g|png|gif)$/)) {
                    var filename = val.split('.');
                    var galleryPanel = $('<a class="gallery-panel">');
                    galleryPanel.attr('href', (FULL + filename[0] + '.jpg'));
                    galleryPanel.attr('style', ('background-image: url(' + THUMBS + filename[0] + '.png)'));

                    galleryOuter.append(galleryPanel);
                }
            });
        }
    });


});
