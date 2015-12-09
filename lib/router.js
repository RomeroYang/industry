Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('navs'); }
});

Router.onBeforeAction('dataNotFound', {only: 'content'});

Router.route('/', {name: 'postsList'});
Router.route('/monitors/:_id', {
	name: 'content',
	data: function() { return Navs.findOne(this.params._id); }
});