nav_list = {
	nav_monitors : [
		{name: 'monitor', text: '监控中心'},
		{name: 'solo', text: '单机监控'},
		{name: 'group', text: '群组监控'},
		{name: 'custom', text: '自定义监控'}
	],
	nav_repairs : [
		{name: 'monitor', text: '维修状态'},
		{name: 'solo', text: '维修记录'}
	],
	nav_services : [
		{name: 'monitor', text: '维保状态'},
		{name: 'solo', text: '年检状态'}
	],
	nav_statistics : [
		{name: 'monitor', text: '故障统计'},
		{name: 'solo', text: '运行时间'},
		{name: 'group', text: '服务统计'}
	],
	nav_messages : [
		{name: 'monitor', text: '用户消息'},
		{name: 'solo', text: '系统消息'}
	],
	nav_options : [
		{name: 'monitor', text: '账号管理'},
		{name: 'solo', text: '设备管理'}
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