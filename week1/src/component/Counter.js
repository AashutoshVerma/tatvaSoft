import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  Inc = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div>
        <h1> Counter : {this.state.number}</h1>
        <button onClick={this.Inc}> Click Me </button>
      </div>
    );
  }
}

export default Counter;

// import React,{useState} from 'react'

// function Counter(props){

//     const [user,setUser] = useState(1)
//     return(
//         <>
//         <h1>
//             hello {user} wish you a great {props.mes}
//         </h1>
//         <button onClick={() => setUser((user + 1))}>Increment Value</button>
//         </>

//     )
// }

// // export default Counter;
