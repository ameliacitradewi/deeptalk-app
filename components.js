// Reusable Components for Deep Talk Website

// Navbar Component
function createNavbar() {
    return `
    <nav class="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon ion-md-menu"></span>
        </button>
        <img src="images/logo.png" class="img-fluid nav-logo-mobile" alt="Company Logo">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="container">
                <img src="images/logo.png" class="img-fluid nav-logo-desktop" alt="Company Logo">
                <ul class="navbar-nav ml-auto nav-right" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
                    <li class="nav-item nav-custom-link">
                        <a class="nav-link" href="index.html">About<i class="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    <li class="nav-item nav-custom-link">
                        <a class="nav-link" href="index.html#marketing">Features <i class="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    <li class="nav-item nav-custom-link">
                        <a class="nav-link" href="legal.html">Privacy<i class="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                    <li class="nav-item nav-custom-link">
                        <a class="nav-link" href="index.html#call-to-action">Download <i class="icon ion-ios-arrow-forward icon-mobile"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
}

// Footer Component
function createFooter() {
    return `
    <footer>
        <div class="container">
            <div class="divider"></div>
            <div class="row">
                <div class="col-md-12">
                    <h5>Meet The Developer</h5>
                </div> 
                <div class="col-md-6 col-xs-12">
                    <a href="https://www.linkedin.com/in/ameliacitradewi/"><i class="icon ion-logo-linkedin"></i></a>
                    <a href="https://www.instagram.com/amelia.citra/"><i class="icon ion-logo-instagram"></i></a>
                    <a href="https://www.youtube.com/@codeinpajamas"><i class="icon ion-logo-youtube"></i></a>
                </div>
                <div class="col-md-6 col-xs-12">
                    <small>2025 &copy; All rights reserved. Template by <a href="http://templune.com/" target="blank" class="external-links">Templune</a></small>
                </div>
            </div>
        </div>
    </footer>
    `;
}

// Call to Action Component 
function createCallToAction() {
    return `
    <section id="call-to-action">
        <div class="container text-center">
            <h2>Start Your Deep Talk Now</h2>
            <div class="title-block">
                <p>Create moments that matter through honest and heartfelt conversations.</p>
                <a href="https://apps.apple.com/id/app/deep-talk-connect-deeper/id6748158683">
                    <img src="images/download-ios.png" alt="Download on iOS" class="download-button">
                </a>
            </div>
        </div>
    </section>
    `;
}

// Function to load components
function loadComponents() {
    // Load navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = createNavbar();
    }
    
    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
    
    // Load call to action
    const ctaContainer = document.getElementById('cta-container');
    if (ctaContainer) {
        ctaContainer.innerHTML = createCallToAction();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
}); 