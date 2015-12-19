WeatherPage = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Devices collection and puts them on this.data.weather
  getMeteorData() {
    let query = this.props.currentDevice.location;

    return {
      weather: Weathers.findOne(query)
    };
  },

  // renderDevices() {
  //   // Get devices from this.data.devices
  //   // return this.data.devices.map((device) => {
  //   //   return <Device changePage={this.props.changePage} key={device._id} device={device} />;
  //   // });
  // },

  render() {
    return (
      <div className="container-fluid">
  		  <h3>WeatherPage</h3>
        <p>deviceId: {this.props.currentDevice.id}</p>
        <p>city: {this.data.weather._id}</p>
        <p>pm: {this.data.weather.pm25}</p>
      </div>
    );
  }
});