if (Meteor.isServer) {
	Devices.insert({name: 'fixtures', status: 'httpstart'});
	HTTP.call(
		"POST", 
		"http://api.easylink.io/v1/device/fetchByPage",
		{
			headers: {
	            "Authorization" : "token a1863b45-d3f3-454d-b951-ab58adfc7ec8",
	            "X-Application-Id" : 'cc855e1a-f0f6-43c8-aeda-914b1f054e92'
			}, 
			data: {
				limit: 10
			}
		},
		function (error, result) {
			if (error) {
		        console.log("失败了" + error);
		    	Devices.insert({name: 'error'});
			} else {
		    	Devices.insert(result);
		    	for (var i = 0; i < result.length; i++) {
		    		var device_item = result[i];
		    		device_item._id = device_item.id;
		    		Devices.insert(device_item);
		    	};
			}
		}
	);
	Devices.insert({name: 'fixtures', status: 'httpend'});
}
// if (Navs.find().count() === 0) {
//   Navs.insert({name: 'monitor', text: '监控中心'});
//   Navs.insert({name: 'solo', text: '单机监控'});
//   Navs.insert({name: 'group', text: '群组监控'});
//   Navs.insert({name: 'custom', text: '自定义监控'});

//   Navs.insert({name: 'repair', text: '维修状态'});
//   Navs.insert({name: 'repairlog', text: '维修记录'});

//   Navs.insert({name: 'service', text: '维保状态'});
//   Navs.insert({name: 'year', text: '年检状态'});
  
//   Navs.insert({name: 'stat_broke', text: '故障统计'});
//   Navs.insert({name: 'stat_time', text: '运行时间'});
//   Navs.insert({name: 'stat_service', text: '服务统计'});

//   Navs.insert({name: 'msg_user', text: '用户消息'});
//   Navs.insert({name: 'msg_sys', text: '系统消息'});

//   Navs.insert({name: 'account', text: '账户信息'});

//   Navs.insert({name: 'users', text: '账号管理'});
//   Navs.insert({name: 'devices', text: '设备管理'});
// }