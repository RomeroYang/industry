MonitorSoloPage = React.createClass({

  render() {
    return (
      <div className="container-fluid">
		  <div id="solo_nav" className="row">
		    <ul className="nav nav-tabs">
		  	  <li name="map" role="presentation" className="active"><a href="javascript:;">地图模式</a></li>
		  	  <li name="index" role="presentation"><a href="javascript:;">索引模式</a></li>
		  	</ul>
		  </div>

		  <div id="map" className="row">
		    <img src="img/solo_map.png">
		  </div>

		  <div style="display:none" id="index" className="row">
		    <div className="col-sm-3 col-md-3">
		    	<img src="img/solo_index_left.png" />
		    </div>
		    <div className="col-sm-9 col-md-9">
		    	<img src="img/solo_index_right.png" />
		    </div>
		  </div>
      </div>
    );
  }
});