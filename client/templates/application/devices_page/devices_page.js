Template.devicesProductsPage.onRendered(function () {
  $("table").click(function(){
    var name = $('<a href="/devices"></a>');
    name.click();
  });
});