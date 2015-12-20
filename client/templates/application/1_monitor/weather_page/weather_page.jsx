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

  getInitialState() {
    return {
      currentNav: 'temperature'
    }
  },

  _changeNav(currentNav) {
    this.setState({
      currentNav: currentNav
    });
  },

  render() {
  	
    return (
    	<div>
    		<WeatherPageHeader currentDevice = {this.props.currentDevice} weather = {this.data.weather} />
        <WeatherNav changNav={this._changeNav} currentNav={this.state.currentNav} />
    		<WeatherDaily weather = {this.data.weather} />
    	</div>
    );
  }
});

