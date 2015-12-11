Template.devicesProductsPage.onRendered(function () {
  $("table").click(function(){
    $('<a id="href" href="/devices"></a>').appendTo('table');
    $('#href')[0].click();
  });
});