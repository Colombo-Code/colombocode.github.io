(function() {
    console.log('init');
    headerScrolling();
    mobileMenuIsOpen();
    mainMenuNavigation();
    menuHighlightForScroll();
    goToContact();
})();


function headerScrolling() {
    var header = $("header");
    $(window).scroll(function() {
        var keyHeight,
            scroll = $(window).scrollTop();
        if ($(window).width() < 620) {
            keyHeight = 200;
        } else {
            keyHeight = 300;
        }
        if (scroll >= keyHeight) {
            header.removeClass('header__dark').addClass("header__white");
        } else {
            header.removeClass("header__white").addClass('header__dark');
        }
    });
}

function mobileMenuIsOpen() {
    $('#mainNavigationContent').on('show.bs.collapse', function() {
        $('nav.navbar').addClass('cc-menu-opened');
    });
    $('#mainNavigationContent').on('hide.bs.collapse', function() {
        setTimeout(function() {
            $('nav.navbar').removeClass('cc-menu-opened');
        }, 200);
    });
}

function mainMenuNavigation() {
    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            $("a.nav-link").removeClass('active');
            $(this).addClass("active");
            var hash = this.hash,
                animatePosition = $(hash).offset().top - 70;
            $('html, body').animate({
                scrollTop: animatePosition
            }, 800, function() {
                // window.location.hash = hash;
            });
        }
    });
}

function goToContact() {
    $(".go-to-contact").on('click', function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - 70
        }, 800);
    });
}

function menuHighlightForScroll() {
    var navChildren = $("li.nav-item").children(),
        aArray = [];
    for (var i = 0; i < navChildren.length; i++) {
        var aChild = navChildren[i],
            ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function() {
        $('a.nav-link').removeClass('active');
        var windowPos = $(window).scrollTop(),
            windowHeight = $(window).height(),
            docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i],
                secPosition = $(theID).offset().top,
                divHeight = $(theID).height();
            secPosition = secPosition - 135;
            divHeight = divHeight;
            if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                $("a.nav-link[href='" + theID + "']").parent().addClass("active");
            } else {
                $("a.nav-link[href='" + theID + "']").parent().removeClass("active");
            }
        }
    });


}