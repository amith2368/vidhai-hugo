import $ from 'jquery'
import 'bootstrap'

// import 'bootstrap/js/src/carousel'
// import 'bootstrap/js/src/util'

$(document).ready(function() {

    $('.number').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
    });
