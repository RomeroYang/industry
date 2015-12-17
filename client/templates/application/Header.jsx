Header = React.createClass({

  _changPageHome() {
    this.props.changePage('home');
  },

  _changPageMessage() {
    this.props.changePage('message_system');
  },

  _changPageAccount() {
    this.props.changePage('account');
  },

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/"><img src="/img/mxchip.svg" /></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="javascript:;" onClick={this._changPageHome} ><img src="/img/header_home.svg" /></a></li>
            <li><a href="javascript:;" onClick={this._changPageMessage} ><img src="/img/header_msg.svg" /></a></li>
            <li><a href="javascript:;" onClick={this._changPageAccount} ><img src="/img/header_head.svg" /></a></li>
          </ul>
        </div>
      </div>
    );
  }
});