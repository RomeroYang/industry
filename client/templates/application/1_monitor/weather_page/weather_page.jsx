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
      currentMessage: {},
      historyMessages: [],
      activeNav: 'temperature'
    }
  },

  _changeNav(activeNav) {
    this.setState({
      activeNav: activeNav
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
      var data_array_str = localStorage.getItem(this.props.currentDevice.id);
      if (data_array_str) {
        var data_array = JSON.parse(data_array_str);
      } else {
        var data_array = [];
      }
      if (data_array.length > 24) {
        data_array.shift();
      }
      data_array.push(msg);
      localStorage.setItem(this.props.currentDevice.id, JSON.stringify(data_array));

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
    var device_id = this.props.currentDevice.id;
    client.connect({onSuccess:onConnect});
    function onConnect() {
        // Once a connection has been made, make a subscription and send a message.
        console.log("connected");
        client.subscribe(device_id + "/out");
    };

    var history_msg_str = localStorage.getItem(this.props.currentDevice.id);
    var history_msg = JSON.parse(history_msg_str);

    var current_chart = this.state.activeNav;
    this.timer = setInterval(function() {
      this._showChart(current_chart);
    }.bind(this), 3000);
  },

  componentWillUnmount() {
    try {
      this.mqttClient.disconnect();
      console.log('disconnected');
    } catch(e) {
      console.log(e);
    }
    clearInterval(this.timer);
  },

  render() {
  	
    return (
    	<div>
    		<WeatherPageHeader currentDevice = {this.props.currentDevice} weather = {this.data.weather} />
        <WeatherPageNav changeNav={this._changeNav} activeNav={this.state.activeNav} />
    		<WeatherDaily weather = {this.data.weather} />
        <div ref="chart" style={{height: '200px'}}></div>
    	</div>
    );
  }
});

