Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('navs'); }
});

Router.onBeforeAction('dataNotFound', {only: 'content'});

Router.route('/', {name: 'home'});
Router.route('/monitor', {name: 'monitorPage'});
Router.route('/solo', {name: 'soloPage'});
Router.route('/group', {name: 'groupPage'});
Router.route('/custom', {name: 'customPage'});

Router.route('/repairlist', {name: 'repairListPage'});
Router.route('/repairlog', {name: 'repairlogPage'});
Router.route('/repair', {name: 'repairPage'});
Router.route('/repairhistory', {name: 'repairHistoryPage'});

Router.route('/service', {name: 'servicePage'});
Router.route('/servicelog', {name: 'serviceLogPage'});
Router.route('/year', {name: 'yearPage'});
Router.route('/yearlog', {name: 'yearLogPage'});

Router.route('/stat_broke', {name: 'statBrokePage'});
Router.route('/stat_time', {name: 'statTimePage'});
Router.route('/stat_service', {name: 'statLogPage'});

Router.route('/msg_user', {name: 'msgUserPage'});
Router.route('/msg_sys', {name: 'msgSysPage'});

Router.route('/account', {name: 'accountPage'});

Router.route('/users', {name: 'usersPage'});
Router.route('/devices', {name: 'devicesPage'});
// Router.route('/:_name', {
// 	name: 'contentPage',
// 	data: function() { return Navs.findOne({name : this.params._name}); }
// });