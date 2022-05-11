
// CRC-32 hash in filename suffix

function scrollToElement(el, offset)
{
    if (offset === undefined)
        offset = 0;

    var duration = 600;
    var element = $(el).offset();
    var pos = element.top + offset;
    $('html, body').animate({scrollTop: pos-50}, duration);
}

(function($) {

    $(function() {
        $('.footer__copyright span').html(new Date().getFullYear());

        $('input, textarea').placeholder();
    });

	$(window).scroll(function(){
		if($(this).scrollTop()>200)
			$('.up-arrow').addClass('up-arrow_active');
		else
			$('.up-arrow').removeClass('up-arrow_active');
	});

	$('.up-arrow').click(function(event){
		event.preventDefault();
		scrollToElement($('body'))
	});

	$('.js-scroll').click(function(event){
		event.preventDefault();
		scrollToElement($(this).attr('href'),-40);
	});


    $('.collapse-toggle').on('click', function(event){
        $(this).toggleClass('collapse-toggle_open');
        event.preventDefault();
        var that = $(this).attr('href');
        $(that).slideToggle();
    });

    function dropHide() {
        $('.drop').removeClass('drop_active');
        $('.drop__down').hide();
    }
    function dropShow(drop) {
        dropHide();
        drop.addClass('drop_active');
        drop.find('.drop__down').show();
    }
    $( ".drop__handler" ).click(function() {

        if( ! $(this).parents('.drop').hasClass('drop_active') ) {
            dropShow( $(this).parents('.drop') );
        }
        else {
            dropHide( $(this).parents('.drop') );
        }
    });
    $(document).on('keyup', function(event) {
        if (event.keyCode == 27) {
            dropHide();
        }
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.drop').length) {
            dropHide();
        }
    });


    $('.drop__option').on('click', function() {
        var value = $(this).text();
        var init = $(this).parents('.drop').find('.drop__handler').text();
        $(this).parents('.drop').find('.drop__handler').text(value);
        $(this).text(init);
        $('.js-currency').text(value);
        calculator.run();
        dropHide();
    });


    $('.tabs__tag').on('click', function(event){
        event.preventDefault();
        var $this = $(this);
        $this.parents('.tabs').find('.tabs__tag_current').removeClass('tabs__tag_current');
        $this.addClass('tabs__tag_current');

        $this.parents('.tabs').find('.tabs__section_visible').removeClass('tabs__section_visible');
        $this.parents('.tabs').find('.tabs__section').eq( $this.index() ).addClass('tabs__section_visible');
    });


    $(function() {
        $('.switch__item').on('click', function(){
            $('.switch').toggleClass('switch_active');
            if ( ! $(this).hasClass('switch__item_active') ) {
                $(this).siblings('.switch__item').removeClass('switch__item_active');
                $(this).addClass('switch__item_active');
            }
        });
    });

	$('.slider').slick({
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        //appendDots: $('.slider .region'),
		arrows: true,
        responsive: [
            {
                breakpoint: 699,
                settings: {
                    arrows: false
                }
            }
        ]
	});

    $('.main-tabs__slider').slick({
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        appendDots: $('.main-tabs__top .region'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true
                }
            }
        ]
    });


    $('.js-hide').on('click', function() {
        $(this).parent().slideUp();
    });

    $('#payments').on('click', function() {
        $('.js-second-tab').hide();
        $('.js-first-tab').show();
    });

    $('#cards').on('click', function() {
        $('.js-second-tab').show();
        $('.js-first-tab').hide();
    });

    var menuPos;

    if ($('.header').size() > 0)
    {
        menuPos = $('.header__top').offset().top + 10;

        if($(this).scrollTop()>menuPos) {
            $('.header__top').addClass('header__top_fxd');
        }
        else {
            $('.header__top').removeClass('header__top_fxd');
        }

        $(window).scroll(function()
        {
            if($(this).scrollTop()>menuPos) {
                $('.header__top').addClass('header__top_fxd');
            }
            else {
                $('.header__top').removeClass('header__top_fxd');
            }
        });
    }

    $('.sticky-column').stick_in_parent();

    $('.sticky-column-long').stick_in_parent({parent: $('.body_long')});


    $('.burger__handler').on('click', function(event) {
        event.preventDefault();
        $(this).parents('.burger').toggleClass('burger_open');
        $('body').toggleClass('page-fxd');
        $('.header__top').removeClass('header__top_fxd');
    });

    $('.top__profile').on('click', function(event) {
        event.preventDefault();
        $('.top__sign-in').slideToggle();
        $('.top__main').toggleClass('top__main_open');
    });


    $('.swap-item').on('click', function(){
        if ( ! $(this).hasClass('swap-item_active') ) {
            $(this).siblings('.swap-item').removeClass('swap-item_active');
            $(this).addClass('swap-item_active');
        }
    });


    function showInnerNav() {
        var toggleTimer;
        var $headerTop = $('.header__top');

        if ($(window).width() > 992) {

            $('.nav__link:first-child').on('mouseenter', function(){
                $headerTop.addClass('header__top_bg');
                clearTimeout(toggleTimer);
                var id = $(this).data('inner');
                toggleTimer = setTimeout(function() {
                    $('#'+id).slideDown();
                }, 200);
            });

            $('.top__nav').on('mouseenter', function(){
                $headerTop.addClass('header__top_bg');
            });

            $headerTop.on('mouseleave', function(){
                $headerTop.removeClass('header__top_bg');
            });

            $('.inner-nav').on('mouseleave', function(){
                $(this).slideUp();
            });
        }

        else {
            $('.nav__link:first-child').on('click', function(){
                $('.sub-menu').toggleClass('sub-menu_open');
                $headerTop.removeClass('header__top_bg');
                $('.inner-nav').hide();
                $('.nav__link_more').toggleClass('nav__link_open');
            });
            $('.top__nav').on('mouseenter', function(){
                $headerTop.removeClass('header__top_bg');
            });
            $('.inner-nav').on('mouseleave', function(){
                $(this).hide();
            });
        }
    }


    $(window).on('load', showInnerNav );
    $(window).on('resize', showInnerNav );

    if (window.ComissionCalculator) {
      var calculator = ComissionCalculator({
        items: $(".exchange__item"),
        form: $("#comission-calc"),
        lang: document.documentElement.lang
      });
    }

})(jQuery);
