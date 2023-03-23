// This is was using Component Did mount in the class component

// import React, { Component } from "react";
// import axios from "axios";
// import UserDetail from "./UserDetail";
// import { UserConsumer } from "./UserContext";

// class User extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       users: [],
//     };
//   }

//   componentDidMount = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((responses) => {
//         this.setState({ users: responses.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     const { users } = this.state;
//     return users.length ? <UserDetail data={users} /> : null;
//   }
// }

// export default User;

// This code uses the useEffect and useState in Functional Component.
import React, { useEffect, useState } from "react";
import axios from "axios";
function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((responses) => {
        setUsers(responses.data);
        // console.log(users);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.id} . {user.name}
          </div>
        );
      })}
    </div>
  );
}

export default User;
