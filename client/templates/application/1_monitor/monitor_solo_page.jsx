MonitorSoloPage = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Devices collection and puts them on this.data.devices
  getMeteorData() {
    let query = {};

    return {
      devices: Devices.find(query, {sort: {created: -1}}).fetch()
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

    const taskClassName = this.props.task.checked ? "checked" : "";

    return (
      <li className={taskClassName}>
        <div className="panel panel-default">
		  <div className="panel-heading">
		    <h3 className="panel-title">Panel title</h3>
		  </div>
		  <div className="panel-body">
		    Panel content
		  </div>
		</div>
      </li>
    );
  }
});