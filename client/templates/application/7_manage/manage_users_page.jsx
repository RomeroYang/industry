ManageUsersPage = React.createClass({

  render() {
    return (
      <div>
        <div className="row">
          <button className="btn-primary pull-right">创建账号</button>
        </div>
        <table className="table">
            <caption>用户列表</caption>
            <thead>
              <tr>
                <th>用户名</th>
                <th>公司</th>
                <th>电话</th>
                <th>Email</th>
                <th>角色</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>张三</td>
                <th>MXCHIP</th>
                <td>13022116619</td>
                <td>zhangsan@mxchip.com</td>
                <td>admin</td>
                <td>编辑</td>
              </tr>
              <tr>
                <td>李四</td>
                <th>MXCHIP</th>
                <td>13010733521</td>
                <td>lisi@qq.com</td>
                <td>worker</td>
                <td>编辑</td>
              </tr>
              <tr>
                <td>Larry</td>
                <th>庆科</th>
                <td>13010788168</td>
                <td>larry@mxchip.com</td>
                <td>admin</td>
                <td>编辑</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
});