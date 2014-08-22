//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

$(document).on('ready', function () {
    $('section ul').hide()
});

//$(document).on('ready', function () {
//    $('ul').css({
//        left: c,
//        transition: 'opacity 1s ease-in-out'
//    });
//});

$(document).on('ready', function () {
    $('.task-list button').on('click', function () {
        $('.task-list button').text("Open");
        var $ul = $(this).parents('.task-list').find('ul');
        $('ul').not($ul).hide();
        $ul.is(':visible') ? $(this).html("Open") : $(this).html("Close");
        $ul.toggle('slow', function () {

        });
    });
});

$(document).on('ready', function () {
    $('.task-list button').on('click', function () {
        var $ul = $(this).parents('.task-list').find('ul');
        $ul.transition({ x: '-100%', opacity: 0.1 }, function () {
            $('.task-list').hide();
        });
        $ul.css({ x: '100%' });
    });
});

$(document).on('ready', function () {
    $('.flash-notice').fadeIn('fast', function () {
        $('.flash-notice').fadeOut(4000);
    });
});


$(document).on('ready', function () {
    $('.flash-notice .close-button').on('click', function () {
        console.log($('.flash-notice').length);
        $('.flash-notice').hide();
    });
});

$(document).on('ready', function () {
    $(function () {
        console.log('.datepicker')
        $('.datepicker').datepicker()
    });
});

$(document).on('ready', function () {
    $(function () {
        if ('article').w
    });
});

