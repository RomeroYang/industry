Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.route('/', {name: 'postsList'});
Router.route('/monitors/monitor', {
	name: 'postPage',
	data: function() { 
		return {
			title: 'Introducing Telescope',
			url: 'http://sachagreif.com/introducing-telescope/'
		};
	}
});