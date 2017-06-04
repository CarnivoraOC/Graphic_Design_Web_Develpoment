/*MENU_APP applies constant centralising to menu elements while scrolling. Also toggles menu up and down, and provides reloading of site*/
var MENU_APP = {
    init: function () {
        /* Centralizing function */
            (function ($) {
                $.fn.extend({
                    center: function () {
                        return this.each(function () {
                            var width = ($(window).width() - $(this).outerWidth()) / 2;
                            width += document.body.scrollLeft;
                            $(this).css({
                                position: 'absolute'
                                , margin: 0
                                , left: (width > 0 ? width : 0) + 'px'
                            });
                        });
                    }
                });
            })(jQuery); //end center function
            //which elements to centralise
            $('#menuContent').center();
            $(window).scroll(function () {
                $('#menuContent').center();
            });
            $('.toggle').center();
            $(window).scroll(function () {
                $('.toggle').center();
            });
            //end which elements to centralise
        
            var toggleMenu = $(".toggle").click(function () {
                    var button = document.querySelector('.toggle');
                    var overlay = document.querySelector('.glass');
                    if (overlay.className === 'glass down') {
                        overlay.className = 'glass up';
                        button.innerText = '-';
                    }
                    else {
                        overlay.className = 'glass down';
                        button.innerText = '+';
                    }
                }) //end toggleMenu
            var resetAll = $("#resetButton").click(function () {
                    location.reload();
                }) //end resetAll
        } // end init
}//end app