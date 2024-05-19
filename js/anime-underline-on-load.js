(function ($, Drupal) {
    Drupal.behaviors.anime_underline_on_load = {
      attach: function (context, settings) {
        // Select elements with the class 'anime-underline-on-load' within the context
        $('.anime-underline-on-load', context).each(function () {
          // Create a span element to act as the underline
          var $underline = $('<span>').addClass('underline bottom-0 left-0 block h-0.5 bg-current w-0');
          $(this).append($underline);
  
          // Apply the anime.js animation
          anime.timeline({ loop: false })
            .add({
              targets: $underline[0],
              width: ['0%', '100%'], // Animate the width from 0% to 100%
              easing: 'easeOutQuad', // Customize the easing function
              duration: 250 // Duration of the animation in milliseconds
            })
            .add({
              targets: $underline[0],
              height: ['0.5px', '26px'], // Animate the height from 0.5px to 2px
              easing: 'easeOutQuad', // Customize the easing function
              duration: 500, // Duration of the animation in milliseconds
            });
        });
      }
    };
  })(jQuery, Drupal);
  