(function ($, Drupal) {
    Drupal.behaviors.anime_underline_on_load = {
      attach: function (context, settings) {
        // Use the once function to ensure this behavior is applied only once
        once('anime-underline-on-load', '.anime-underline-on-load', context).forEach(function (element) {
          // Create a span element to act as the underline
          var $underline = $('<span>').addClass('underline bottom-0 left-0 block h-0.5 bg-current w-0');
          $(element).append($underline);
  
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
              height: ['0.5px', '26px'], // Animate the height from 0.5px to 26px
              easing: 'easeOutQuad', // Customize the easing function
              duration: 500, // Duration of the animation in milliseconds
            });
        });
      }
    };
  })(jQuery, Drupal);
  