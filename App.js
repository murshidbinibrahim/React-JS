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

//React.createElement

const heading = React.createElement("h1",{id : "title", key : "001"},"Hello World - React.createElement");

// React.createElement ==> Object ==> HTML(DOM)

console.log(heading);

// JSX Express

const heading_jsx = (
    <h1 id="title" key="002"> Hello World - JSX</h1>
)

//JSX ==> React.createElement ==> Object ==> HTML(DOM)

console.log(heading_jsx);



const container = React.createElement("div",{id:"container" , myprops : "props-sample"},[heading, heading_jsx]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

