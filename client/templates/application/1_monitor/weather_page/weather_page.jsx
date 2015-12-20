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
      activeNav: 'temperature'
    }
  },

  _changeNav(activeNav) {
    this.setState({
      activeNav: activeNav
    });
  },

  render() {
  	
    return (
    	<div>
    		<WeatherPageHeader currentDevice = {this.props.currentDevice} weather = {this.data.weather} />
        <WeatherPageNav changeNav={this._changeNav} activeNav={this.state.activeNav} />
    		<WeatherDaily weather = {this.data.weather} />
    	</div>
    );
  }
});

