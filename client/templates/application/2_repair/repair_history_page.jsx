RepairHistoryPage = React.createClass({

  _changePage() {
    this.props.changePage('repair_log');
  },

  render() {
    return (
      <div>
        <h3>维修记录</h3>

        <div id="index" className="row">
          <div className="col-sm-3 col-md-3">
            <img src="img/solo_index_left.png" />
          </div>
          <div className="col-sm-9 col-md-9">
            <a href="javascript:;" onClick={this._changePage}><img src="img/solo_index_right.png" /></a>
          </div>
        </div>
      </div>
    );
  }
});