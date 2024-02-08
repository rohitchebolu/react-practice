import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }
  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }
  render() {
    //console.log("Parent Render")
    return (
      <div className="about">
        <div>
          <h1>Logged In As</h1>
          <UserContext.Consumer>
            {({ logedInUser }) => <h1>{logedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default AboutUs;
