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
      return <FirstNav currentPage={this.props.currentPage} key={nav.name} nav={nav} changePage={this.props.changePage} />;
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
      return <SecondNav currentPage={this.props.currentPage} key={nav2.name} nav2={nav2} changePage={this.props.changePage} />;
    });
  },

  _changePage() {
    this.props.changePage(this.props.nav.name);
  },

  render() {
    var current_page = this.props.currentPage;
    var page_name;
    if (current_page.match('_')) {
      page_name = current_page.split('_')[0];
    } else {
      page_name = current_page;
    }
    var ifActive = page_name == this.props.nav.name? 'active':'';

    if (this.props.nav.content.length) {
      return (
        <li className={ifActive}>
          <a href="javascript:;" onClick={this._toggleNav}><img src={"/img/"+this.props.nav.name+".svg"} />{this.props.nav.text}</a>
          <ul style={{display:"none"}}>
            {this.renderSecondNavs()}
          </ul>
        </li>
      );
    } else {
      return (
        <li className={ifActive}>
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
    var current_page = this.props.currentPage;
    var ifActive = current_page == this.props.nav2.name? 'active':'';
    return (
      <li className={ifActive}>
        <a href="javascript:;" onClick={this._changePage}>{this.props.nav2.text}</a>
      </li>
    );
  }
});