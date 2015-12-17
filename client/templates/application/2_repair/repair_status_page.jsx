RepairStatusPage = React.createClass({

  _changePage() {
    this.props.changePage('repair_track');
  },

  render() {
    return (
      <div>
        <h3>维修工单</h3>
        <a href="javascript:;" onClick={this._changePage}><img src="img/repair_list.png" /></a>
      </div>
    );
  }
});