import React from "react";
import ReactDOM from "react-dom/client";

/* React DOM Manipulation */

/*
    parcel is doing all the things (Interview Question)

    + Hot Module Replacement (HMR)
    + File Watcher Algorithm-C++ (Live Server Feature)
    + BUNDLING 
    + MINIFYING
    + Cleaning our Code 
    + Dev and Production Build
    + Super Fast Build Algorithm
    + Image Optimization
    + Caching while development [after refreshing it will come milliseconds - caching]
    + Compression
    + Compatible with older version of browser
    + HTTPS on Dev.Machine (npx build index.html --https)
    + Manage port numbers
    + Consistent Hashing Algorithm
    + Zero Config
    + Tree Shaking - removing unwanted code

// Transitive Dependencies

*/ 

const heading = React.createElement("h1",{id : "title", key : "001"},"Hello World from parcel-bundler");
const heading2 = React.createElement("h2",{id : "title2", key : "002"},"Hello World from React2");

// React.createElement ==> Object ==> HTML(DOM)

const container = React.createElement("div",{id:"container" , myprops : "props-sample"},[heading, heading2]);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root (modify our dom)
root.render(container);

/* JS DOM Manipulation */

// const heading = document.createElement("h1");
        
// heading.innerHTML = "Hello World JS";

// const root = document.getElementById("root");

// root.appendChild(heading);


//---> Without using JSX <---//

/*
        <div class="header">
            <h1>Learn React</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div> */
/*

# Similar to React.createElement 

const container = React.createElement("div",{id:"header" , myprops : "props-sample"},[
    React.createElement("h1",{id : "title", key : "001"},"Hello World from parcel-bundler"),
    React.createElement("ul",{},[
        React.createElement("li",{},"Home",
        React.createElement("li",{},"About Us"),
        React.createElement("li",{},"Contact Us")
        )]),
]); */