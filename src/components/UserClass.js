import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserInfo:{
        name:"Dummy",
        location:"Default",
        
      }    
    };
    //console.log(this.props.name + "Child constructor");
  }

  async componentDidMount(){
    //console.log("Child component Did Mount")
    const data = await fetch("https://api.github.com/users/rohitchebolu");
    const json = await data.json();
    this.setState({
      getUserInfo:json
    });
  }

  render() {
    //console.log("child render");
    const {name,location,avatar_url}=this.state.getUserInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <p>Developer</p>
      </div>
    );
    
  }
}

export default UserClass;
