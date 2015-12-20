MonitorSoloPage = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Devices collection and puts them on this.data.devices
  getMeteorData() {
    let query = {};

    return {
      devices: Devices.find(query).fetch()
    };
  },

  getInitialState() {
    return {
      currentMessage: {},
      historyMessages: []
    }
  },

  renderDevices() {
    // Get devices from this.data.devices
    return this.data.devices.map((device) => {
      return <Device changePage={this.props.changePage} key={device._id} device={device} />;
    });
  },

  _mqttClient() {
    var host = "api.easylink.io";
    var port = 1983;
    var clientID = "v1-app-" + parseInt(Math.random() * (1000000000000), 12);
    var client = new Paho.MQTT.Client(host, Number(port), clientID);
    client.onMessageArrived = this._onMessageArrived;
    
    this.mqttClient = client;
  },

  _onMessageArrived(message) {
    //console.log("onMessageArrived:"+message.payloadString);
    var msg = JSON.parse(message.payloadString);
    if (this.state.currentMessage.temperature === msg.temperature) {
      //do nothing
    } else {
      var data_array_str = localStorage.getItem('60b3105c/d0bae40090fb');
      if (data_array_str) {
        var data_array = JSON.parse(data_array_str);
      } else {
        var data_array = [];
      }
      if (data_array.length > 24) {
        data_array.shift();
      }
      data_array.push(msg);
      localStorage.setItem('60b3105c/d0bae40090fb', JSON.stringify(data_array));

      this.setState({
        currentMessage: msg,
        historyMessages: data_array
      });
    }
  },

  _getChartData(current_chart) {
    var history_msg = this.state.historyMessages;
    var chart_data = [];
    for (var i = 0; i < history_msg.length; i++) {
      var data_item = history_msg[i][current_chart];
      chart_data.push(data_item);
    };
    return chart_data;
  },

  _showChart(current_chart) {
    var chart_data = this._getChartData(current_chart);
    var chart_container = this.refs.chart;
    $(chart_container).highcharts({
        title: {
            text: '',
            x: -20 //center
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle',
        //     borderWidth: 0
        // },
        series: [{
            name: '',
            data: chart_data
        }]
    });
  },

  componentDidMount() {
    this._mqttClient();
    var client = this.mqttClient;
    client.connect({onSuccess:onConnect});
    function onConnect() {
        // Once a connection has been made, make a subscription and send a message.
        console.log("onConnect");
        var device_id = '60b3105c/d0bae40090fb';
        client.subscribe(device_id + "/out");   //订阅消息
    };

    var history_msg_str = localStorage.getItem('60b3105c/d0bae40090fb');
    var history_msg = JSON.parse(history_msg_str);

    var current_chart = 'temperature';
    this.timer = setInterval(function() {
      this._showChart(current_chart);
    }.bind(this), 3000);
  },

  componentWillUnmount() {
    this.mqttClient.disconnect();
    clearInterval();
  },

  render() {
    return (
      <div className="container-fluid">
		  <h3>设备列表</h3>

		  <div className="row">
		    <ul className="list-unstyled">
		    	{this.renderDevices()}
		    </ul>
        <div ref="chart" style={{height: '200px'}}></div>
		  </div>
      </div>
    );
  }
});

Device = React.createClass({
  // propTypes: {
  //   // This component gets the task to display through a React prop.
  //   // We can use propTypes to indicate it is required
  //   device: React.PropTypes.object.isRequired
  // },

  _changePage() {
  	this.props.changePage('weather', this.props.device);
  },

  render() {

    var isOnline = this.props.device.online-0;
    const panelClassName = isOnline ? "panel panel-primary" : "panel panel-default";
    const onlineStatus = isOnline ? "online" : "offline";

    return (
      <li>
        <a href="javascript:;" onClick={this._changePage}>
          <div className={panelClassName}>
      		  <div className="panel-heading">
      		    <h3 className="panel-title">{this.props.device.id} <small className="pull-right">{onlineStatus}</small></h3>
      		  </div>
      		  <div className="panel-body">
      		    <table>
                <tbody>
      	          <tr className="row" >
      	            <td className="col-md-3">MAC: {this.props.device.bssid} </td>
      	            <td className="col-md-3"> alias: {this.props.device.alias} </td>
                    <td className="col-md-3"> location: {this.props.device.location} </td>
      	            <td className="col-md-3"> created: {this.props.device.created}</td>
      	          </tr>
                </tbody>
      	       </table>
      		  </div>
      		</div>
        </a>
      </li>
    );
  }
});