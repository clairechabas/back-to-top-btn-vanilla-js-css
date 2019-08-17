window.addEventListener("DOMContentLoaded", function() {
  var scrollPosition = 0;

  // Creating the button
  var bttButton = document.createElement("div");
  bttButton.classList.add("back-to-top");
  bttButton.innerHTML = '<i class="fas fa-chevron-circle-up"></i>';
  document.querySelector(".container").appendChild(bttButton);
  bttButton.style.display = "none"; // By default we don't display the button

  // We detect the scroll event
  window.addEventListener("scroll", function(e) {
    // We capture the user's scroll position
    scrollPosition = window.scrollY;

    // We display the button when the user is scrolling
    if (scrollPosition > 0) {
      window.requestAnimationFrame(function() {
        bttButton.style.display = "block";
        bttButton.onclick = function() {
          window.scrollTo(0, 0);
        };
      });
      // We hide the button if we're at the top of page
    } else if (scrollPosition === 0) {
      bttButton.style.display = "none";
    }
  });
});
