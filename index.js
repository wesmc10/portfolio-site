'use strict'

function hideNavOnScrollDown() {
    let previousPosition = window.pageYOffset;
    $(window).on('scroll', function(event) {
        let currentPosition = window.pageYOffset;
        if (currentPosition > previousPosition) {
            $('nav').fadeOut();
        }
        else if (currentPosition < previousPosition) {
            $('nav').fadeIn();
        }
        previousPosition = currentPosition;
    });
}


function scrollToTopOfPage() {
    $('.home-link').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
}


function scrollToTopOfPageShortLink() {
    $('nav').on('click', '.short-home-link', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
}


function scrollToWork() {
    $('.work').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $('#section-one').offset().top - 25}, 'slow');
    });
}


function scrollToSocial() {
    $('.social').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 'slow');
    });
}


function portfolioSite() {
    hideNavOnScrollDown();
    scrollToTopOfPage();
    scrollToTopOfPageShortLink()
    scrollToWork();
    scrollToSocial();
}

$(portfolioSite);