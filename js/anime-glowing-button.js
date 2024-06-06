(function ($, Drupal) {
  Drupal.behaviors.glowingButtonAnimation = {
    attach: function (context, settings) {
      once("glowing-button-animation", ".glowing-button", context).forEach(function (button) {
        var $button = $(button);
        $button.addClass("relative");

        // Initial anime.js animation for gentle bouncing and glowing effect
        anime({
          targets: button,
          translateY: [
            { value: 0, duration: 450, easing: "easeInOutSine" },
            { value: -5, duration: 450, easing: "easeInOutSine" },
            { value: 0, duration: 450, easing: "easeInOutSine" },
          ],
          boxShadow: [
            { value: '0 0 2px rgba(0, 450, 255, 0.5)', duration: 450, easing: "easeInOutSine" },
            { value: '0 0 8px rgba(0, 450, 255, 0.5)', duration: 450, easing: "easeInOutSine" },
            { value: '0 0 2px rgba(0, 450, 255, 0.5)', duration: 450, easing: "easeInOutSine" },
            
          ],
          loop: true
        });

        // Hover effect for more pronounced glow and faster bouncing
        $button.hover(
          function () {
            anime({
              targets: button,
              translateY: [
                { value: 0, duration: 450, easing: "easeInOutSine" },
                { value: -10, duration: 450, easing: "easeInOutSine" },
                { value: 0, duration: 450, easing: "easeInOutSine" },
              ],
              boxShadow: [
                { value: '0 0 5px rgba(0, 450, 255, 1)', duration: 450, easing: "easeInOutSine" },
                { value: '0 0 12px rgba(0, 450, 255, 1)', duration: 450, easing: "easeInOutSine" },
                { value: '0 0 5px rgba(0, 450, 255, 1)', duration: 450, easing: "easeInOutSine" }
              ],
              loop: true
            });
          },
          function () {
            anime({
              targets: button,
              translateY: [
                { value: 0, duration: 2000, easing: "easeInOutSine" },
                { value: -5, duration: 2000, easing: "easeInOutSine" },
                { value: 0, duration: 2000, easing: "easeInOutSine" },
              ],
              boxShadow: [
                { value: '0 0 2px rgba(0, 450, 255, 0.5)', duration: 2000, easing: "easeInOutSine" },
                { value: '0 0 8px rgba(0, 450, 255, 0.5)', duration: 2000, easing: "easeInOutSine" },
                { value: '0 0 2px rgba(0, 450, 255, 0.5)', duration: 2000, easing: "easeInOutSine" }
              ],
              loop: true
            });
          }
        );
      });
    },
  };
})(jQuery, Drupal);
