WeatherNav = React.createClass({

	_renderNavs() {
		var navs = [
			{name: 'temperature', text: '温度'},
			{name: 'humidity', text: '湿度'},
			{name: 'pm25', text: 'PM2.5'},
			{name: 'wind_velocity', text: '风力'},
			{name: 'wind_direction', text: '风向'},
			{name: 'sound', text: '噪声'}
		];
	    return navs.map((nav) => {
	      return <NavItem changeNav={this.props.changeNav} activeNav={this.props.currentNav} key={nav.name} nav={nav} />;
	    });
	},

  	render() {
	    return (
			<ul className="nav nav-pills">
				{this._renderNavs()}
			</ul>
	    );
  }
});

NavItem = React.createClass({

  	render() {
  		var isActive = this.props.currentNav == this.props.nav.name ? true:false;
  		var activeClass = isActive ? 'active':'';
  		var activeImg = isActive ? '_p.png':'_n.png';
	    return (
			<li role="presentation" className={activeClass}>
				<a href="#">
					<img src={'img/weather/weather_nav_'+this.props.nav.name+activeImg} />
					{this.props.nav.text}
				</a>
			</li>
	    );
  }
});