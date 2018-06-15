import React from "react";
import './Starwars.css';
import CharList from "./components.CharList"

const Characters = props => {
    return <li>{props.CharList}</li>
}

export default Characters;