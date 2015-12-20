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
  render() {
  	
    return (
    	<div>
    		<WeatherHeader currentDevice = {this.props.currentDevice} weather = {this.data.weather} />
        <WeatherButton />
    		<WeatherDaily weather = {this.data.weather} />
    	</div>
    );
  }
});

