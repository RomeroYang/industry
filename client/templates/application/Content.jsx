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
            <RepairHistoryPage changePage={this.props.changePage} />
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
            <DataInfoPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'data_info_detail':
        return (
          <div className="container-fluid">
            <DataInfoDetailPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'data_repair':
        return (
          <div className="container-fluid">
            <DataRepairPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'data_repair_detail':
        return (
          <div className="container-fluid">
            <DataRepairDetailPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'data_year':
        return (
          <div className="container-fluid">
            <DataYearPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'data_year_detail':
        return (
          <div className="container-fluid">
            <DataYearDetailPage changePage={this.props.changePage} />
          </div>
        );
        break;

      case 'stat_broke':
        return (
          <div className="container-fluid">
            <StatBrokePage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'stat_runtime':
        return (
          <div className="container-fluid">
            <StatRuntimePage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'stat_service':
        return (
          <div className="container-fluid">
            <StatservicePage changePage={this.props.changePage} />
          </div>
        );
        break;

      case 'message_user':
        return (
          <div className="container-fluid">
            <MessageUserPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'message_system':
        return (
          <div className="container-fluid">
            <MessageSystemPage changePage={this.props.changePage} />
          </div>
        );
        break;

      case 'account':
        return (
          <div className="container-fluid">
            <AccountPage changePage={this.props.changePage} />
          </div>
        );
        break;

      case 'manage_users':
        return (
          <div className="container-fluid">
            <ManageUsersPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'manage_devices_products':
        return (
          <div className="container-fluid">
            <ManageDevicesProductsPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'manage_devices':
        return (
          <div className="container-fluid">
            <ManageDevicesPage changePage={this.props.changePage} />
          </div>
        );
        break;
      case 'manage_system':
        return (
          <div className="container-fluid">
            unauthorized
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