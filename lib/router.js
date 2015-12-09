Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('navs'); }
});

Router.onBeforeAction('dataNotFound', {only: 'content'});

Router.route('/', {name: 'postsList'});
Router.route('/:_id', {
	name: 'content',
	data: function() { return Posts.findOne(this.params._id); }
});