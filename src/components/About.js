import React from "react";
import UserClass from "./UserClass";

class AboutUs extends React.Component{
  constructor(props){
    super(props);
    //console.log("Parent constructor");
  }
  componentDidMount(){
    //console.log("Parent Component Did Mount");
  }
  render(){
    //console.log("Parent Render")
    return(
      <div className="about">
      <h1>Developed By</h1>
      <UserClass />
    </div>
    )
  }
}

export default AboutUs;