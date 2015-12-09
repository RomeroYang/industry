Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('navs'); }
});

Router.onBeforeAction('dataNotFound', {only: 'content'});

Router.route('/', {name: 'postsList'});
Router.route('/navs/:_id', {
	name: 'contentPage',
	data: function() { return Navs.findOne({name : _id}); }
});