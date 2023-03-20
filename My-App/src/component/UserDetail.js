import React, { Component } from "react";

class UserDetail extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div>
        {data.length
          ? data.map((post) => (
              <div key={post.id + post.name}>
                <h3>
                  Name : {post.name} | email : {post.email}
                </h3>
                <p></p>
              </div>
            ))
          : null}
      </div>
    );
  }
}

export default UserDetail;
