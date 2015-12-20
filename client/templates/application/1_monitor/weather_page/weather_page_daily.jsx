var WeatherCondition = ["暴雨","大雪","大雨","多云","晴","沙尘","未知","雾","小雪","小雨","阴","中雪","中雨"];
WeatherPageDaily = React.createClass({
  	render() {
  		
  		var Month = [31,28,31,30,31,30,31,31,30,31,30,31];
		var data = this.props.weather.weather_data;
		var bgp = 0;
		var mon=0;
		var day=0;
		for(;bgp<13;bgp++){
			if(this.props.weather.weather_data[0].weather.match(WeatherCondition[bgp])!=null){
				break;
			}
		}
		var displaydaily =  data.map(function (dat) {
			return (
				<DailyDetail key={dat.date} dat={dat} />
			);
		});
	    return (
	      <div className={"container-fluid" + " " + "pagedaily" + bgp}>
			    <div className="row rowdaily">
					<div className="col-md-4">
					<br/><br/><br/><br/><br/><br/><br/><br/>
						<h4>{this.props.weather.weather_data[0].temperature}</h4>
			      		<h4>{this.props.weather.weather_data[0].weather}</h4>
			      		<h4>{this.props.weather.weather_data[0].wind}</h4>
			      		<h4 className="pm25">{"PM2.5:" + this.props.weather.pm25}</h4>
					</div>
					{displaydaily}
			    </div>
	      </div>
	    );
  }
});
DailyDetail = React.createClass({
  render() {
  	var weatherpic;
  	for (var x in WeatherCondition){
  		if(this.props.dat.weather.match(WeatherCondition[x])!=null)
  			{weatherpic = WeatherCondition[x];break;}
  	}
  	weatherpic = "/img/weather/weather_min_" + weatherpic + ".png";
    return (
      <div className="col-md-2 weathertext">
      	<h3>{this.props.dat.date.slice(0,3)}</h3>
      	<h5>{this.props.dat.mon+"月"+this.props.dat.day+"日"}</h5>
      	<img className="weatherpic" src={weatherpic} />
      	<h5>{this.props.dat.temperature}</h5>
      	<h5>{this.props.dat.weather}</h5>
      </div>
    );
  }
});