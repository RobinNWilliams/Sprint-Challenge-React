import React from "react";
import './App.css';
import CharList from "./components.CharList"

const Characters = props => {
    return <li>{props.charName}</li>
}

export default Characters;