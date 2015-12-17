Header = React.createClass({
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
          <a className="navbar-brand" href="/"><img src="/img/mxchip.svg"></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/">home</a></li>
            <li><a href="/msg_sys">messages</a></li>
            <li><a href="/account">Profile</a></li>
          </ul>
        </div>
      </div>
    );
  }
});