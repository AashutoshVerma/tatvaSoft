import React, { Component } from "react";
class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        <table border={1}>
          <thead>
            <td>ID</td>
            <td>Name</td>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
