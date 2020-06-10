$(document).ready(
    function() {
    $(".menu-dropdown").mouseenter(
          function() {
                // $(this).children('.dropdown').toggleClass('active');
          $(this).children(".dropdown").addClass("active");            }
      );
      $(".menu-dropdown").click(
        function() {
          $(this).children(".dropdown").toggleClass("active");
        }
      )

      $(".wrapper").click(
        function() {
          $(this).removeClass("active");
        }
      )
    }
);
