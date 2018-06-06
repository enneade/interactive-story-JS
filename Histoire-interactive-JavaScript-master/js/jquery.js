var index = 37;
$(document).ready(function(){
  function start() {
    if (index > 0) {
      index--;
      $(".DescriptionButtons_buttons_notReady").hide(function() {
        $(".DescriptionButtons_buttons_text_dontWant").hide();
      });
      $(".DescriptionButtons_buttons_ready").hide(function() {
        $(".DescriptionButtons_buttons_text_ready").hide();
      });
    }else {
      $(".DescriptionButtons_buttons_notReady").show(3000, function() {
        $(".DescriptionButtons_buttons_text_dontWant").fadeIn(3000);
      });
      $(".DescriptionButtons_buttons_ready").show(3000, function() {
        $(".DescriptionButtons_buttons_text_ready").fadeIn(3000);
      });
    }
  }
    clearInterval();
    start();
    setInterval(start, 1000);

//      $("#submit_pseudo").click(function () {
//       showMessageOne();
//    });
});
