Content = React.createClass({
  render() {
    var currentPage = this.props.currentPage;

    switch (currentPage) {
      case 'home':
        return (
          <div className="container-fluid">
            this is home
          </div>
        );
        break;
      case 'monitor_center':
        return (
          <div className="container-fluid">
            this is monitor_center
          </div>
        );
        break;
      case 'monitor_solo':
        return (
          <div className="container-fluid">
            this is monitor_solo
          </div>
        );
        break;
      case 'monitor_group':
        return (
          <div className="container-fluid">
            this is monitor_group
          </div>
        );
        break;
      case 'monitor_cunstom':
        return (
          <div className="container-fluid">
            this is monitor_cunstom
          </div>
        );
        break;
      case 'repair_status':
        return (
          <div className="container-fluid">
            this is repair_status
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
    }
  }
});