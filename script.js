document.getElementById('about-a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag

    var bioContainer = document.getElementById('bio-container');
    
    // Scroll to the bio container instantly
    bioContainer.scrollIntoView();
});

document.getElementById('contact-a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag

    var footer = document.querySelector('footer');
    
    // Scroll to the footer instantly
    footer.scrollIntoView();
});

document.getElementById('home-a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag

    var mainContent = document.querySelector('main');
    
    // Scroll to the main content instantly
    mainContent.scrollIntoView();
});


