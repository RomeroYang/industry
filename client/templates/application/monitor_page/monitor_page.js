setTimeout(function() {
  $("#monitor_nav li").click(function(){
    var name = $(this).attr('name');
  	if ($('#'+name).css('display') == 'none') {
      $("#monitor_nav li").toggleClass('active');
      $(this).parent().parent().siblings().toggle();
    }
  });
}, 500);