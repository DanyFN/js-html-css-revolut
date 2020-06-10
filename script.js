$(document).ready(
  function() {
  $(".menu-dropdown").mouseenter(
        function() {
        $(this).children(".dropdown").addClass("active");            }
    );
    $(".menu-dropdown").click(
      function() {
        $(this).children(".dropdown").toggleClass("active");
      }
    )
  }
);
