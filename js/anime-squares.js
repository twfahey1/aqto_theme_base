(function ($, Drupal) {
  Drupal.behaviors.anime_squares_animation = {
    attach: function (context, settings) {
      // Create a container to hold the squares and use flexbox for alignment
      // LEts use Drupal 10s new once to wrap it
      once(
        "anime-squares-animation",
        ".anime-squares-container",
        context
      ).forEach(function (container) {
        var $container = $("<div>").addClass("flex w-full h-20 space-x-2");
        $(".anime-squares-container", context).append($container);

        // Define the number of squares and their properties
        var numSquares = 6;
        var colors = ["bg-red-800", "bg-yellow-500", "bg-green-800"];
        var squares = [];
        for (var i = 0; i < numSquares; i++) {
          var colorClass = colors[i % colors.length];
          var $square = $("<span>").addClass(
            "w-6 h-6 " + colorClass + " cursor-pointer"
          );
          $container.append($square);
          squares.push($square[0]);
        }

        // Apply the anime.js initial animation for endless ripple effect
        anime.timeline({ loop: true }).add({
          targets: squares,
          translateX: [
            { value: "50%", duration: 3000 },
            { value: "-50%", duration: 1250 },
            { value: "0%", duration: 1000 },
          ],
          easing: "easeInOutQuad",
          delay: anime.stagger(100), // Stagger the start time of each square
        });

        // Add event listeners for interaction
        squares.forEach(function (square) {
          $(square).on("click touchstart", function () {
            var randomX = (Math.random() - 0.5) * 200; // Random value between -100 and 100
            var randomY = (Math.random() - 0.5) * 200; // Random value between -100 and 100

            anime({
              targets: square,
              translateX: randomX,
              translateY: randomY,
              easing: "easeOutQuad",
              duration: 1000, // Duration of the animation in milliseconds
            });
          });
        });
      });
    },
  };
})(jQuery, Drupal);
