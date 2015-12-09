Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('navs'); }
});

Router.onBeforeAction('dataNotFound', {only: 'content'});

Router.route('/', {name: 'home'});
Router.route('/:_name', {
	name: 'contentPage',
	data: function() { return Navs.findOne({name : this.params._name}); }
});