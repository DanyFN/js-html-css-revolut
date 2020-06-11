
$(document).ready(

  function() {
    $(".fa-chevron-down").show();
    $(".fa-chevron-up").hide();

    $("#arrowDown").mouseenter(
      function () {
        $(".fa-chevron-down").toggle();
        $(".fa-chevron-up").toggle();
      }
    );
    $("#arrowDown").mouseleave(
      function () {
        $(".fa-chevron-down").toggle();
        $(".fa-chevron-up").toggle();
      }
    );
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
    $(".menu-dropdown").mouseleave(
      function() {
        $(this).children(".dropdown").removeClass("active");

      }
    )
  }
)
