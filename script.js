
$(document).ready(
  function() {
    $(".menu-dropdown").mouseenter(
      function() {
        // $(".menu-dropdown.dropdown").removeClass('active');
        $(this).children(".dropdown").addClass("active");

      }
    )
    $(".menu-dropdown").click(
      function() {
        $(this).children(".dropdown").toggleClass("active");
      }
    )
  }
)
