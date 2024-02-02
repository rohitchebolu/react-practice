import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>  
      <button onClick={() => {setCount(1)}}>Increase</button>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <p>Developer</p>
    </div>
  );
};

export default User;
