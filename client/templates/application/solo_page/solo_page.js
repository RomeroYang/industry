setTimeout(function() {
  $("#solo_nav li").click(function(){
    var name = $(this).attr('name');
  	if ($('#'+name).css('display') == 'none') {
      $(this).parent().parent().siblings().toggle();
      $("#solo_nav li").toggleClass('active');
    }
  });
}, 500);