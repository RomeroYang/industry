// App component - represents the whole app
App = React.createClass({

  getInitialState() {
    return {
      currentPage: 'home'
    }
  },

  _changePage(name, deviceId) {
    this.setState({
      currentPage: name,
      deviceId: deviceId
    });
  },

  render() {
    return (
      <div>

        <nav className="navbar navbar-inverse navbar-fixed-top">
          <Header changePage={this._changePage} />
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <LeftNav currentPage={this.state.currentPage} changePage={this._changePage} />
            </div>

            <div id="main" className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <Content deviceId={this.state.deviceId} currentPage={this.state.currentPage} changePage={this._changePage} />
            </div>
          </div>
        </div>

      </div>
    );
  }
});