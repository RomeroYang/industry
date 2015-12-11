Template.devicesProductsPage.onRendered(function () {
  $("table").click(function(){
    var name = $('<a href="/devices"></a>');
    name[0].click();
  });
});