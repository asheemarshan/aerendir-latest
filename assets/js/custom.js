/*global $ */
$(document).ready(function () {

    "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(
        function (e) {
            if ($(window).width() > 943) {
                $(this).children("ul").fadeIn(150);
                e.preventDefault();
            }
        }, function (e) {
            if ($(window).width() > 943) {
                $(this).children("ul").fadeOut(150);
                e.preventDefault();
            }
        }
    );
    //If width is more than 943px dropdowns are displayed on hover


    //the following hides the menu when a click is registered outside
    $(document).on('click', function (e) {
        if ($(e.target).parents('.menu').length === 0)
            $(".menu > ul").removeClass('show-on-mobile');
    });

    $(".menu > ul > li").click(function () {
        //no more overlapping menus
        //hides other children menus when a list item with children menus is clicked
        var thisMenu = $(this).children("ul");
        var prevState = thisMenu.css('display');
        $(".menu > ul > li > ul").fadeOut();
        if ($(window).width() < 943) {
            if (prevState !== 'block')
                thisMenu.fadeIn(150);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

    /*Equal Height Function*/

    function makeContainersEqualHeight($containers) {
        var $maxHeight = 0; //resetting max height variable
        $($containers).each(function () {
            var $this = $(this);
            if ($this.outerHeight() > $maxHeight) {
                $maxHeight = $this.outerHeight();
            }
        });
        $($containers).css('height', $maxHeight);
        //$($containers).height($maxHeight);
    }

    /*Page will be Reload when the orientation change*/
    $(window).on('orientationchange', function () {
        location.reload();
    });

    /*Equal Height Function*/

    function makeContainersEqualHeight($containers) {
        var $maxHeight = 0; //resetting max height variable
        $($containers).each(function () {
            var $this = $(this);
            if ($this.outerHeight() > $maxHeight) {
                $maxHeight = $this.outerHeight();
            }
        });
        $($containers).css('height', $maxHeight);
        //$($containers).height($maxHeight);
    }


    /*Page will be Reload when the orientation change*/
    $(window).on('orientationchange', function () {
        location.reload();
    });


    if ($(window).width() > 767) {
        makeContainersEqualHeight('.noval-solutions .background-wrapper-soln .box-wrapper-novel-solutions');


    }
    if ($(window).width() < 767) {

    }

    $('#submit-from').on('click', function (e) {
        var fname = document.getElementById("fname").value;
        var email = document.getElementById("email").value;
        var lname = document.getElementById("lname").value;

        if (fname != '' && email != "" && lname != "") {
            $('.error').removeClass('error');
            if (isEmail(email)) {

                $('#mail-client-popup').modal('show');
            } else {
                $('#email').addClass('error');
            }
        } else {
            $('.error').removeClass('error');
            if (fname == '') {
                $('#fname').addClass('error');
            }
            if (email == '') {
                $('#email').addClass('error');

            }
            if (lname == '') {
                $('#lname').addClass('error');
            }



        }
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    $('.mail-client').on('click', function () {
        var mail_client = $(this).val();
        var fname = document.getElementById("fname").value;
        var email = document.getElementById("email").value;
        var lname = document.getElementById("lname").value;
        var body = '';
        var subject = 'Learn More';
        body += 'Hi' + '%0D%0A';
        body += 'I would like to learn more about Aerendir.' + '%0D%0A'  + '%0D%0A';
        body += 'Name: ' + fname + '%0D%0A'  + '%0D%0A';
        body += 'Company: ' + lname + '%0D%0A'  + '%0D%0A';
        body += 'Email: ' + email + '%0D%0A'  + '%0D%0A';
        body += 'Thank You. ';
        var url = "";
        if (mail_client == 'gmail') {
            url = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=info@aermob.com.&su=" + subject + "&body=" + body + "&tf=1";

        }
        else if (mail_client == 'outlook') {
            url = "http://compose.mail.yahoo.com/?to=info@aermob.com&subj=" + subject + "&body=" + body;
        }
        else {
            url = "https://outlook.live.com/default.aspx?rru=compose&to=nirodha@eight25media.com&subject=" + subject + "&body" + body;
        }
        window.open(url, '_blank');


    });

    $('.scroll').on('click', function () {
        var id = $(this).attr("data-id");
        $('.scroll').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate(
            {
                scrollTop: $('#' + id).offset().top - 50
            }, 1000);
    });

    $('.logo-slider-outer-wrapper1').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        fade: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    $('.logo-slider-outer-wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        autoplay: true,
        slidesToScroll: 1
    });

});
