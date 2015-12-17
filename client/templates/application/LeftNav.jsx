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

  getInitialState() {
    return {
      activeNav: ''
    }
  },

  _toggleNav(name) {
    this.setState({
      activeNav: name
    });
  },

  renderFirstNavs() {
    return this.getNavs().map((nav) => {
      return <FirstNav toggleNav={this._toggleNav} activeNav={this.state.activeNav} currentPage={this.props.currentPage} key={nav.name} nav={nav} changePage={this.props.changePage} />;
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

  _toggleNav() {
    this.props.toggleNav(this.props.nav.name);
    if (this.props.nav.name == 'account') {
      this.props.changePage(this.props.nav.name);
    }
  },
 
  renderSecondNavs() {
    return this.props.nav.content.map((nav2) => {
      return <SecondNav currentPage={this.props.currentPage} key={nav2.name} nav2={nav2} changePage={this.props.changePage} />;
    });
  },

  render() {

    var ifActive = this.props.activeNav == this.props.nav.name? true:false;
    var ifClass = ifActive? 'active':'';
    var ifDisplay = ifActive? 'block':'none';
    var imageEnd = ifActive? '_p.svg':'_n.svg';

    if (this.props.nav.content.length) {
      return (
        <li className={ifClass}>
          <a href="javascript:;" onClick={this._toggleNav}><img className="left-nav-logo" src={"/img/nav_"+this.props.nav.name+imageEnd} />{this.props.nav.text}</a>
          <ul className="nav" style={{display:ifDisplay}}>
            {this.renderSecondNavs()}
          </ul>
        </li>
      );
    } else {
      return (
        <li className={ifClass}>
          <a href="javascript:;" onClick={this._toggleNav}><img className="left-nav-logo" src={"/img/nav_"+this.props.nav.name+imageEnd} />{this.props.nav.text}</a>
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

    var ifActive = this.props.currentPage == this.props.nav2.name? 'active':'';
    console.log(ifActive);
    return (
      <li className={"left-nav2 "+ifActive}>
        <a href="javascript:;" onClick={this._changePage}>{this.props.nav2.text}</a>
      </li>
    );
  }
});