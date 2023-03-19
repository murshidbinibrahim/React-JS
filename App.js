/* React DOM Manipulation */

const heading = React.createElement("h1",{id : "title"},"Hello World from React1");
const heading2 = React.createElement("h2",{id : "title2"},"Hello World from React2");

const container = React.createElement("div",{id:"container"},[heading, heading2]);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root (modify our dom)
root.render(container);

/* JS DOM Manipulation */

// const heading = document.createElement("h1");
        
// heading.innerHTML = "Hello World JS";

// const root = document.getElementById("root");

// root.appendChild(heading);