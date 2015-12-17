LeftNav = React.createClass({
  getNavs() {
    return [
      { name: 'monitor', text: "设备监控", content: [
        { name: 'monitor_center', text: "监控中心"},
        { name: 'monitor_solo', text: "单机监控"},
        { name: 'monitor_group', text: "群组监控"},
        { name: 'monitor_cunstom', text: "自定义监控"}
      ] },
      { name: 'repair', text: "设备急修", content: [
        { name: 'repair_status', text: "维修状态"},
        { name: 'repair_history', text: "维修记录"}
      ] },
      { name: 'data', text: "设备档案", content: [
        { name: 'data_info', text: "设备信息"},
        { name: 'data_repair', text: "维修记录"},
        { name: 'data_year', text: "年检记录"}
      ] },
      { name: 'stat', text: "数据统计", content: [
        { name: 'stat_broke', text: "故障统计"},
        { name: 'stat_runtime', text: "运行时间"},
        { name: 'stat_service', text: "服务统计"}
      ] },
      { name: 'message', text: "消息通知", content: [
        { name: 'message_user', text: "用户消息"},
        { name: 'message_system', text: "系统消息"}
      ] },
      { name: 'account', text: "账户信息", content: [] },
      { name: 'manage', text: "管理设置", content: [
        { name: 'manage_user', text: "账号管理"},
        { name: 'manage_device', text: "设备管理"},
        { name: 'manage_system', text: "系统配置"}
      ] }
    ];
  },

  renderFirstNavs() {
    return this.getNavs().map((nav) => {
      return <FirstNav key={nav.name} nav={nav} changePage={this.props.changePage} />;
    });
  },

  render() {
    return (
      <ul className="nav nav-sidebar nav">
        {this.renderFirstNavs()}
      </ul>
    );
  }
});

FirstNav = React.createClass({
 
  renderSecondNavs() {
    return this.props.nav.content.map((nav2) => {
      return <SecondNav key={nav2.name} nav2={nav2} changePage={this.props.changePage} />;
    });
  },

  _changePage() {
    this.props.changePage(this.props.nav.name);
  },

  render() {
    if (this.props.nav.content.length) {
      return (
        <li>
          <a href="javascript:;" onClick={this._toggleNav}>{this.props.nav.text}</a>
          <ul className="nav nav-sidebar nav">
            {this.renderSecondNavs()}
          </ul>
        </li>
      );
    } else {
      return (
        <li>
          <a href="javascript:;" onClick={this._changePage}>{this.props.nav.text}</a>
        </li>
      );
    }
  }
});

SecondNav = React.createClass({

  _changePage() {
    this.props.changePage(this.props.nav2.name);
  },

  render() {
    return (
      <li>
        <a href="javascript:;" onClick={this._changePage}>{this.props.nav2.text}</a>
      </li>
    );
  }
});