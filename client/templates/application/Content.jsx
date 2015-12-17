Content = React.createClass({
  render() {
    var currentPage = this.props.currentPage;

    switch (currentPage) {
      case 'home':
        return (
          <div className="container-fluid">
            Welcome To MXCHIP IoT Site
          </div>
        );
        break;
      case 'monitor_center':
        return (
          <div className="container-fluid">
            <MonitorCenterPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'monitor_solo':
        return (
          <div className="container-fluid">
            <MonitorSoloPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'monitor_group':
        return (
          <div className="container-fluid">
            <MonitorGroupPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'monitor_cunstom':
        return (
          <div className="container-fluid">
            <MonitorCustomPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'repair_status':
        return (
          <div className="container-fluid">
            <RepairStatusPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'repair_track':
        return (
          <div className="container-fluid">
            <RepairTrackPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'repair_history':
        return (
          <div className="container-fluid">
            this is repair_history
          </div>
        );
        break;
      case 'repair_log':
        return (
          <div className="container-fluid">
            <RepairLogPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'data_info':
        return (
          <div className="container-fluid">
            this is data_info
          </div>
        );
        break;
      case 'data_repair':
        return (
          <div className="container-fluid">
            this is data_repair
          </div>
        );
        break;
      case 'data_year':
        return (
          <div className="container-fluid">
            this is data_year
          </div>
        );
        break;
      case 'stat_broke':
        return (
          <div className="container-fluid">
            this is stat_broke
          </div>
        );
        break;
      case 'stat_runtime':
        return (
          <div className="container-fluid">
            this is stat_runtime
          </div>
        );
        break;
      case 'stat_service':
        return (
          <div className="container-fluid">
            this is stat_service
          </div>
        );
        break;
      case 'message_user':
        return (
          <div className="container-fluid">
            this is message_user
          </div>
        );
        break;
      case 'message_system':
        return (
          <div className="container-fluid">
            this is message_system
          </div>
        );
        break;
      case 'account':
        return (
          <div className="container-fluid">
            this is account
          </div>
        );
        break;
      case 'manage_user':
        return (
          <div className="container-fluid">
            this is manage_user
          </div>
        );
        break;
      case 'manage_device':
        return (
          <div className="container-fluid">
            this is manage_device
          </div>
        );
        break;
      case 'manage_system':
        return (
          <div className="container-fluid">
            this is manage_system
          </div>
        );
        break;
      default:
        return (
          <div className="container-fluid">
            404 not found
          </div>
        );
    }
  }
});