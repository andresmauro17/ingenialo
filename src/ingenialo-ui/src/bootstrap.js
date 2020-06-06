
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
