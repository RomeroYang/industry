WeatherHeader = React.createClass({

  render() {
    var isOnline = this.props.currentDevice.online-0 ? "online" : "offline";
    var onlineName = this.props.currentDevice.online-0 ? "online-circle" : "offline-circle";
    return (
    	<div className="container-fluid pageheader">
      	  <div className="row">
      	     <div className="col-md-10">{this.props.weather._id}</div>
      	     <div className="col-md-2">
      	       <div className={onlineName} ></div>
      	       <div className="isonline">{isOnline}</div>
      	     </div>
      	  </div>
      </div>
    );
  }
});

