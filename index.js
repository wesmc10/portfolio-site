// this function is responsible for scrolling to the top of the page when the user
// clicks the top left link
function scrollToTopOfPage() {
    $('.home-link').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 10}, 'slow');
    });
}

// this function is responsible for scrolling to the section that shows my work
// when the user clicks the 'work' link
function scrollToWork() {
    $('.work').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 'slow');
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
    scrollToTopOfPage();
    scrollToWork();
    scrollToSocial();
}

$(portfolioSite);