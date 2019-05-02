$(function () {
    //FOUC
    $('body').css('visibility', 'visible');
    
    //kendo notification fix
    $('.k-notification.k-popup').closest('.k-animation-container').addClass('test');
});

var bumpIt = function () {
    $('body').css('margin-bottom', $('footer').height());
    
    if ($("#admin-page-layout").length) {
        $('#admin-body .main').css('padding-bottom', '100px');
        $('#admin-body').css('min-height', 'calc(100% - ' + $('.template-mods').outerHeight() + 'px)');
    }
},
    didResize = false;

bumpIt();

$(window).resize(function () {
    didResize = true;
});
setInterval(function () {
    if (didResize) {
        didResize = false;
        bumpIt();
    }
}, 250);


$(document).on('click', '#btnNotFound', function () {
    $.get("/not-a-real-controller/not-a-real-action");
});

$(document).on('click', '#btnInternalServer', function () {
    $.get("/Home/InternalServerError");
});

$(document).on('click', '#btnInvalidOperation', function () {
    $.get("/Home/InvalidOperation");
});

$(document).on('click', '#btnNotImplemented', function () {
    $.get("/Home/NotImplemented");
});

$(document).on('click', '#btnArgumentOutOfRange', function () {
    $.get("/Home/ArgumentOutOfRange");
});

$(document).on('click', '#btnSystemOutOfMemory', function () {
    $.get("/Home/SystemOutOfMemory");
});

$(document).on('click', '#btnFormat', function () {
    $.get("/Home/Format");
});