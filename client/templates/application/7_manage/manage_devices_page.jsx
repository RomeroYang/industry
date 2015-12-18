ManageDevicesProductsPage = React.createClass({

  _changePage() {
    this.props.changePage('manage_devices');
  },

  render() {
    return (
      <div>
        <div className="row">
          <a className="btn btn-primary pull-right">创建产品</a>
        </div>
        <table className="table">
            <caption>产品列表</caption>
            <thead>
              <tr>
                <th>ID</th>
                <th>名称</th>
                <th>品牌</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={this._changePage}>
                <td>9283hbs3</td>
                <th>电梯</th>
                <td>MXCHIP</td>
              </tr>
              <tr onClick={this._changePage}>
                <td>8jdu4bu3</td>
                <th>自动扶梯</th>
                <td>MXCHIP</td>
              </tr>
              <tr onClick={this._changePage}>
                <td>84but2zk</td>
                <th>升降机</th>
                <td>MXCHIP</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
});

ManageDevicesPage = React.createClass({

  render() {
    return (
      <div>
        <div className="row">
          <button className="btn-primary">创建设备</button>
          <button className="btn-primary pull-right">设备管理</button>
        </div>
        <table className="table">
          <caption>设备列表</caption>
          <thead>
            <tr>
              <th>ID</th>
              <th>名称</th>
              <th>型号</th>
              <th>用户</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>c877d02b/ghghghghghgh</td>
              <th>馨越公寓16号楼A梯</th>
              <td>AK_47</td>
              <td>MXCHIP</td>
              <td>在线</td>
            </tr>
            <tr>
              <td>c877d02b/666777666888</td>
              <th>馨越公寓16号楼A梯</th>
              <td>AK_47</td>
              <td>MXCHIP</td>
              <td>在线</td>
            </tr>
            <tr>
              <td>c877d02b/ncvbcvbcvbvb</td>
              <th></th>
              <td>M_16</td>
              <td></td>
              <td>离线</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});