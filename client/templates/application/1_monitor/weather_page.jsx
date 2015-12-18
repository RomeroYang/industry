WeatherPage = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Devices collection and puts them on this.data.devices
  getMeteorData() {
    let query = {};

    return {
      devices: Devices.find(query).fetch()
    };
  },

  renderDevices() {
    // Get devices from this.data.devices
    return this.data.devices.map((device) => {
      return <Device changePage={this.props.changePage} key={device._id} device={device} />;
    });
  },

  render() {
    return (
      <div className="container-fluid">
		  <h3>设备列表</h3>

		  <div className="row">
		    <ul>
		    	{this.renderDevices()}
		    </ul>
		  </div>
      </div>
    );
  }
});

Device = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    device: React.PropTypes.object.isRequired
  },

  _changePage: {
  	this.props.changePage('weather', this.props.device.id);
  },

  render() {

    const panelClassName = this.props.device.online-0 ? "panel panel-primary" : "panel panel-default";

    return (
      <li className={taskClassName}>
        <div className={panelClassName}>
    		  <div className="panel-heading">
    		    <h3 className="panel-title">{this.props.device.id}</h3>
    		  </div>
    		  <div className="panel-body">
    		    <table>
              <tr>
                <td>MAC: {this.props.device.MAC}</td>
                <td>alias: {this.props.device.alias}</td>
                <td>created: {this.props.device.created}</td>
              </tr>
            </table>
    		  </div>
    		</div>
      </li>
    );
  }
});