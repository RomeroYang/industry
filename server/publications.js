Meteor.publish('devices', function() {
  return Devices.find();
});
// Meteor.publish('navs', function() {
//   return Navs.find();
// });