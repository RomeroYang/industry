Meteor.publish('devices', function() {
  return Devices.find();
});
Meteor.publish('weathers', function() {
  return Weathers.find();
});
// Meteor.publish('navs', function() {
//   return Navs.find();
// });