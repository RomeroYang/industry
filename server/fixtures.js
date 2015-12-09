if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
if (Navs.find().count() === 0) {
  Navs.insert({name: 'monitor', text: '监控中心'});
  Navs.insert({name: 'solo', text: '单机监控'});
  Navs.insert({name: 'group', text: '群组监控'});
  Navs.insert({name: 'custom', text: '自定义监控'});

  Navs.insert({name: 'repair', text: '维修状态'});
  Navs.insert({name: 'repairlog', text: '维修记录'});

  Navs.insert({name: 'service', text: '维保状态'});
  Navs.insert({name: 'year', text: '年检状态'});
  
  Navs.insert({name: 'stat_broke', text: '故障统计'});
  Navs.insert({name: 'stat_time', text: '运行时间'});
  Navs.insert({name: 'stat_service', text: '服务统计'});

  Navs.insert({name: 'msg_user', text: '用户消息'});
  Navs.insert({name: 'msg_sys', text: '系统消息'});

  Navs.insert({name: 'users', text: '账号管理'});
  Navs.insert({name: 'devices', text: '设备管理'});
}