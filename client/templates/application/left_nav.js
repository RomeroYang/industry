// Template.leftNav.helpers({
//   monitors: nav_list.nav_monitors,
//   repairs: nav_list.nav_repairs,
//   services: nav_list.nav_services,
//   statistics: nav_list.nav_statistics,
//   messages: nav_list.nav_messages,
//   options: nav_list.nav_options
// });
$(document).ready(function(){
  $("ul.nav > li > a").click(function(){
    $(this).next().toggle();
  });
});