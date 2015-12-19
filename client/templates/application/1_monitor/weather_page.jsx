WeatherPage = React.createClass({
  // This mixin makes the getMeteorData method work
  //mixins: [ReactMeteorData],

  // Loads items from the Devices collection and puts them on this.data.devices
  // getMeteorData() {
  //   let query = {};

  //   // return {
  //   //   devices: Devices.find(query).fetch()
  //   // };
  // },

  // renderDevices() {
  //   // Get devices from this.data.devices
  //   // return this.data.devices.map((device) => {
  //   //   return <Device changePage={this.props.changePage} key={device._id} device={device} />;
  //   // });
  // },

  render() {
    var UTFTranslate = {
      Change:function(pValue){
        return pValue.replace(/[^\u0000-\u00FF]/g,function($0){return escape($0).replace(/(%u)(\w{4})/gi,"&#x$2;")});
      },
      ReChange:function(pValue){
        return unescape(pValue.replace(/&#x/g,'%u').replace(/\\u/g,'%u').replace(/;/g,''));
      }
    },
    var stringutf8 = UTFTranslate.ReChange('\u4e0a\u6d77\u5e02');
    return (
      <div className="container-fluid">
  		  <h3>WeatherPage</h3>
        <p>{this.props.deviceId}</p>
        <p>{stringutf8}</p>
      </div>
    );
  }
});