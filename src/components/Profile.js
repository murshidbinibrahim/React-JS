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
  }

  render() {
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
