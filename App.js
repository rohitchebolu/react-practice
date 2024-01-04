const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [React.createElement(
                "h1",
                {},
                "I'm h1 tag"        
            ),
            React.createElement(
                "h2",
                {},
                "I'm h2 tag"        
            )
            ]    
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [React.createElement(
                "h1",
                {},
                "I'm h1 tag"        
            ),
            React.createElement(
                "h2",
                {},
                "I'm h2 tag"        
            )
            ]    
        )
    ]
)

//const heading = React.createElement("h1", {id : "heading"}, "Hello from React!");

console.log(parent) //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //renders object to h1 tag