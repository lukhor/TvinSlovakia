$(document).ready(function () {
    /*
     *  Simple image gallery. Uses default settings
     */

    $('.fancybox').fancybox({
        afterLoad : function() {
            //this.title = 'Produkt ' + (this.index + 1) + ' z ' + this.group.length + (this.title ? ' - ' + this.title : '');
            this.title = 'Produkt ' + (this.index + 1) + ' z ' + this.group.length;
        }
    });

    $('.novinky').fancybox({
        afterLoad : function() {
            //this.title = 'Produkt ' + (this.index + 1) + ' z ' + this.group.length + (this.title ? ' - ' + this.title : '');
            this.title = 'Novinka ' + (this.index + 1) + ' z ' + this.group.length;
        }
    });

    /*$('.fancybox').fancybox({


        helpers : {
            title : {
                type : 'inside'
            },
            buttons	: {

            }
        },

        afterLoad : function() {
            this.title = 'Produkt ' + (this.index + 1) + ' z ' + this.group.length + (this.title ? ' - ' + this.title : '');
        }
    });*/

    var myCenter = new google.maps.LatLng(48.935688, 18.167734);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                "featureType": "landscape",
                "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]
            }, {
                "featureType": "poi",
                "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]
            }, {
                "featureType": "road.highway",
                "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
            }, {
                "featureType": "road.arterial",
                "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]
            }, {
                "featureType": "road.local",
                "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]
            }, {
                "featureType": "transit",
                "stylers": [{"saturation": -100}, {"visibility": "simplified"}]
            }, {
                "featureType": "administrative.province",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]
            }]
        };

        var image = {
            url: 'images/marker.png'
        };

        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            title: 'Tvin Slovakia s.r.o.',
            icon: image
        });

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    $("#onas-btn").click(function () {
        $("html, body").animate({
            scrollTop: $("#onas-section").offset().top
        }, 1000);
    });
    $("#produkty-btn").click(function () {
        $("html, body").animate({
            scrollTop: $("#produkty-section").offset().top
        }, 1000);
    });
    $("#kontakty-btn").click(function () {
        $("body, html").animate({
            scrollTop: $("#kontakty-section").offset().top
        }, 1000);
    });

    var didScroll;
    var lastScrollTop = 0;
    var delta = 60;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop && st > navbarHeight) {
            $('header').removeClass('nav-down').addClass('nav-up');
        } else if(st <= delta){
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }
});