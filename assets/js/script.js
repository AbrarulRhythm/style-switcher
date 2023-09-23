/* 
    Theme Name : AGKN (Dark Theme)
    Theme Type : Portfolio Website
    Author : Mountain Climbers Star 
*/

$(document).ready(function () {
    "use strict";

    /*-----------------------------------
        Custom Cursor
    -----------------------------------*/
    let crsr = $('.cursor-1');
    let blur = $('.cursor-2');
    let cursorWrapper = $('.cursor-wrap');
    let defaultCursor = $('.default-cursor');

    $(document).on('mousemove', function (dets) {
        var mousX = dets.clientX;
        var mousY = dets.clientY;
        crsr.css({ 'top': mousY - 8, 'left': mousX - 8 });
        blur.css({ 'top': mousY - 250, 'left': mousX - 250 });
    });

    $('a').each(function () {
        $(this).on('mouseenter', function () {
            crsr.addClass("active");
            blur.addClass("active");
        });
        $(this).on('mouseleave', function () {
            crsr.removeClass('active');
            blur.removeClass('active');
        });
    });

    defaultCursor.on('click', function () {
        cursorWrapper.toggleClass('active');

        var text = $(this).text();
        if (text == 'Set Default Cursor') {
            $(this).text('Set Blur Cursor');
        }
        else {
            $(this).text('Set Default Cursor');
        }
    });

    /*-----------------------------------
    Style Switcher
    -----------------------------------*/
    $('.switcher-btn').on('click', function () {
        $('.color-switcher').toggleClass('active');
    });

    let themeButons = $('.theme-button');

    themeButons.each(function () {
        $(this).on("click", function () {
            let dataColor = $(this).attr('data-color');
            $(':root').css('--color-skyblue-900', dataColor);
        });
    });

});