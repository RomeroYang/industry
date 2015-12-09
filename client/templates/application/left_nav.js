nav_list = {
	nav_monitors : [
		{name: 'monitor', text: '监控中心'},
		{name: 'solo', text: '单机监控'},
		{name: 'group', text: '群组监控'},
		{name: 'custom', text: '自定义监控'}
	],
	nav_repairs : [
		{name: 'repair', text: '维修状态'},
		{name: 'repairlog', text: '维修记录'}
	],
	nav_services : [
		{name: 'service', text: '维保状态'},
		{name: 'year', text: '年检状态'}
	],
	nav_statistics : [
		{name: 'stat_broke', text: '故障统计'},
		{name: 'stat_time', text: '运行时间'},
		{name: 'stat_service', text: '服务统计'}
	],
	nav_messages : [
		{name: 'msg_user', text: '用户消息'},
		{name: 'msg_sys', text: '系统消息'}
	],
	nav_options : [
		{name: 'users', text: '账号管理'},
		{name: 'devices', text: '设备管理'}
	]
}

Template.leftNav.helpers({
  monitors: nav_list.nav_monitors,
  repairs: nav_list.nav_repairs,
  services: nav_list.nav_services,
  statistics: nav_list.nav_statistics,
  messages: nav_list.nav_messages,
  options: nav_list.nav_options
});