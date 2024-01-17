import React from "react";
import ReactDOM from "react-dom";

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I'm H1 tag"),
  React.createElement("h2", {}, "I'm H1 tag"),
  React.createElement("h3", {}, "I'm H1 tag"),
]);

const header2 = (
  <div className="title">
    <h1>I'm a heading</h1>
    <h2>I'm a heading</h2>
    <h3>I'm a heading</h3>
  </div>
);

const Header3 = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://lh4.googleusercontent.com/pzcL7G25jch7H0Vpgm9NvY_C47dcs2jBCJ0rcTApLLOhOBgQ1M7zLyq3qCAJT3HLkuPq_6CECXpVtCmK8-6PA0lXDNAtPTixHiZahoomXOmEfxzMFs-REzysEaJ5tPaRAH0wtFclD1HD_cHC9c-5-q4" alt="Logo" />
      </div>
      <div className="search-bar-container">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="user-icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUcZP8UWywZOYwpOUMcf4S6-HmAxHMIx4OA&usqp=CAU" alt="User-icon"/>
      </div>
    </header>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header3 />);