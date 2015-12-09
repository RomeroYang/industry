Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.route('/', {name: 'postsList'});
Router.route('/monitors/monitor', {
	name: 'content',
	data: function() { return Posts.findOne('Introducing Telescope'); }
});