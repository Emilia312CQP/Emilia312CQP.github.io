$(function () {
    $('#nav>.wrapper>div>div').on('mouseover', function () {
        $(this).find('ul').fadeIn('slow');
        $(this).find('.icon').addClass('animated shake fast').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated shake  fast')
        });
    });
    $('#nav>.wrapper>div>div>ul').on('mouseover', function (e) {
        /*阻止事件冒泡*/
        e.stopPropagation();


    });
    $('#nav>.wrapper>div').on('mouseleave', function ( ) {
      $(this).find('ul').fadeOut('slow');

    })


});