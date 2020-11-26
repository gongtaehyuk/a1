
    /* Tab & Gallery */
    $('.btn a:first-child').click(function(){
        $('.tab1').show()
        $('.tab2').hide()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    });
    $('.btn a:last-child').click(function(){
        $('.tab2').show()
        $('.tab1').hide()
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    });

    /* Menu */
    $('.menu li').mouseenter(function(){
        $('.sub-menu').stop().slideDown()
    });
    $('.menu li').mouseleave(function(){
        $('.sub-menu').stop().slideUp()
    });

    /* Modal */
    $('.open-modal').click(function(){
        $('.modal').fadeIn()
    });
    $('.close-modal').click(function(){
        $('.modal').fadeOut()
    });

