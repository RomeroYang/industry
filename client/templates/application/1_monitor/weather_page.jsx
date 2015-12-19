WeatherPage = React.createClass({
  // This mixin makes the getMeteorData method work
  //mixins: [ReactMeteorData],

  // Loads items from the Devices collection and puts them on this.data.devices
  // getMeteorData() {
  //   let query = {};

  //   // return {
  //   //   devices: Devices.find(query).fetch()
  //   // };
  // },

  // renderDevices() {
  //   // Get devices from this.data.devices
  //   // return this.data.devices.map((device) => {
  //   //   return <Device changePage={this.props.changePage} key={device._id} device={device} />;
  //   // });
  // },

  render() {
    var stringutf8 = utf8.decode('\u4e0a\u6d77\u5e02');
    return (
      <div className="container-fluid">
		  <h3>WeatherPage</h3>
      <p>{this.props.deviceId}</p>
      <p>{stringutf8}</p>
      </div>
    );
  }
});