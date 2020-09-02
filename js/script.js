$(document).ready(function(){

  var clickNext = $(".next");
  var clickPrevious = $(".previous");

  clickNext.click(
    function() {
      var activeImg = $("img.active");
      activeImg.removeClass("active");
      if (activeImg.hasClass("last")) {
        $("img.first").addClass("active");
      } else {
        activeImg.next().addClass("active");
      }
    }
  );

  clickPrevious.click(
    function() {
      var activeImg = $("img.active");
      activeImg.removeClass("active");
      if (activeImg.hasClass("first")) {
        $("img.last").addClass("active");
      } else {
        activeImg.prev().addClass("active");
      }
    }
  );




});