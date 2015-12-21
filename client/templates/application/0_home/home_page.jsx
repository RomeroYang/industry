HomePage = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Devices collection and puts them on this.data.devices
  getMeteorData() {
    return {
      devicesCount: Devices.find({}).count(),
      devicesOnlineCount: Devices.find({online: 1}).count(),
    };
  },

  	render() {
	    return (
	    	<div className="row">
	    		<div className="col-md-3">
	    			<a>设备数量</a>
	    		</div>
	    		<div className="col-md-3">
	    			<a>在线设备</a>
	    		</div>
	    		<div className="col-md-3">
	    			<a>故障消息</a>
	    		</div>
	    		<div className="col-md-3">
	    			<a>用户消息</a>
	    		</div>
	    	</div>
	    );
  }
});