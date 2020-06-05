
//-------JS Global Compulsory------
require('./assets/vendor/jquery/dist/jquery.min.js');

try {
    // window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    // require('bootstrap');
} catch (e) {}

// require('./assets/vendor/jquery-migrate/dist/jquery-migrate.min.js');
require('./assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js');

//-------JS Front--------
require('./assets/js/hs.core.js');
require('./assets/js/hs.validation.js');
require('./assets/js/hs.cubeportfolio.js');


//-- JS Implementing Plugins navbar --
require('./assets/vendor/hs-header/dist/hs-header.min.js');
require('./assets/vendor/hs-go-to/dist/hs-go-to.min.js');
require('./assets/vendor/hs-unfold/dist/hs-unfold.min.js');
require('./assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js');
require('./assets/vendor/hs-show-animation/dist/hs-show-animation.min.js');
require('./assets/vendor/jquery-validation/dist/jquery.validate.min.js');



//-------other ------
require('./assets/vendor/hs-sticky-block/dist/hs-sticky-block.min.js');
require('./assets/vendor/hs-counter/dist/hs-counter.min.js');
require('./assets/vendor/appear.js');
require('./assets/vendor/cubeportfolio/js/jquery.cubeportfolio.min.js');
require('./assets/vendor/dzsparallaxer/dzsparallaxer.js');
// require('./assets/vendor/aos/dist/aos.js');



//-- carrousel --
require('./assets/js/hs.slick-carousel.js');









//-- JS Plugins Init. --
$(document).on('ready', function () {
    // initialization of header
    var header = new HSHeader($('#header')).init();

    // initialization of HSMegaMenu component
    var megaMenu = new HSMegaMenu($('.js-mega-menu')).init();

    // initialization of unfold
    var unfold = new HSUnfold('.js-hs-unfold-invoker').init();

    // initialization of form validation
    $('.js-validate').each(function() {
      $.HSCore.components.HSValidation.init($(this), {
        rules: {
          confirmPassword: {
            equalTo: '#signupPassword'
          }
        }
      });
    });

    // initialization of show animations
    $('.js-animation-link').each(function () {
      var showAnimation = new HSShowAnimation($(this)).init();
    });
  });


  $(document).on('ready', function () {
    // initialization of slick carousel
    $('.js-slick-carousel').each(function() {
      var slickCarousel = $.HSCore.components.HSSlickCarousel.init($(this));
    });
  });