// Template.leftNav.helpers({
//   monitors: nav_list.nav_monitors,
//   repairs: nav_list.nav_repairs,
//   services: nav_list.nav_services,
//   statistics: nav_list.nav_statistics,
//   messages: nav_list.nav_messages,
//   options: nav_list.nav_options
// });

setTimeout(function() {
  $("ul.nav > li > a").click(function(){
  	$("ul.nav > li > a").not($(this)).next().hide();
  	$("ul.nav > li > a").not($(this)).parent().removeClass('active');
    $(this).next().toggle();
    if ($(this).parent().attr('class') == 'active') {
    	$(this).parent().removeClass('active');
    } else {
    	$(this).parent().addClass('active');
    }
  });
}, 500);