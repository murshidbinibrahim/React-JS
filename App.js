import React from "react";
import ReactDOM from "react-dom/client";

// JSX Expression

const Title = () => (
    <h1 id="title" key="002"> DevMK</h1>
)

// React Component

//  1. Functional Component - JS Function, it returns JSX
//  2. Class Based Component

//Normal Function

const myFriend = "Jaseem"; // We can write any piece of JS Code inside JSX - (It is very secure - Sanitization)

// + Component composition ==> Component inside a Component (Nested component) = (<Title />)

function HeaderComponent () {
    return (
        <div>
            <Title /> <h2>{myFriend}</h2>
            <h1>Learn React - Functional Component</h1>
            <h2>This is a description from Normal Fn</h2>
        </div>
    )
}

// Arrow Function - we don't need to write return & {}

const HeaderComponent_Arrow = () => (
        <div>
            <h1>Learn React - Functional Component</h1>
            <h2>This is a description From Arrow Fn</h2>
        </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <HeaderComponent/>
);

