// Functional Component

// function Profile() {
//   return (
//     <div>
//       <h1>Profile</h1>
//       <h3>Murshid Bin Ibrahim</h3>
//       <h4>Founder of iSupport</h4>
//     </div>
//   );
// }

import React from "react";

//Class Component

class Profile extends React.Component {
  constructor(props) {
    super(props);

    // Best place to create a state variable
    this.state = {
      mobile: 7994176757,
    };

    console.log("Constructor");
  }

  componentDidMount() {
    //cons in Single Page Application (still calling (twice +++) move to another page) - [performance loss]
    //SPA not realad application - just re-render it
    setInterval(() => {
      console.log("iFood App");
    }, 1000);
    //Best place to make an API Call
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    //every state change
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //it is called after Update(move to another page)
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Profile</h1>
        <h3>Murshid Bin Ibrahim</h3>
        <h4>Founder of iSupport</h4>
        <h5>
          {
            //props recieving in Class component
            this.props.devname
          }
        </h5>
        <h5>Mob : {this.state.mobile}</h5>
        <button
          onClick={() =>
            //we do not mutate state directly
            //never do this.state = something
            this.setState({
              mobile: 9037203450,
            })
          }
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Profile;
