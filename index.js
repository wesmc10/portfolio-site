// this function is responsible for hiding the navbar when the user scrolls down
// and displaying the navbar when the user scrolls up
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

// this function is responsible for scrolling to the top of the page when the user
// clicks the top left link on screens larger than 370px
function scrollToTopOfPage() {
    $('.home-link').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
}

// this function is responsible for scrolling to the top of the page when the user
// clicks the top left link on screens smaller than 370px
function scrollToTopOfPageShortLink() {
    $('nav').on('click', '.short-home-link', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
}

// this function is responsible for scrolling to the section that shows my work
// when the user clicks the 'work' link
function scrollToWork() {
    $('.work').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $('#section-one').offset().top - 25}, 'slow');
    });
}

// this function is responsible for scrolling to the bottom of the page when the user
// clicks the 'social' link, so that the user can follow the links in the footer
function scrollToSocial() {
    $('.social').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 'slow');
    });
}

// this is the callback function for when the page loads
function portfolioSite() {
    hideNavOnScrollDown();
    scrollToTopOfPage();
    scrollToTopOfPageShortLink()
    scrollToWork();
    scrollToSocial();
}

$(portfolioSite);