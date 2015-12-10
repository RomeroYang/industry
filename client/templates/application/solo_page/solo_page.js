Template.soloPage.onRendered(function () {
  $("#solo_nav li a").click(function(){
    var name = $(this).parent().attr('name');
  	if ($('#'+name).css('display') == 'none') {
      $(this).parent().parent().parent().siblings().toggle();
      $("#solo_nav li").toggleClass('active');
    }
  });
});