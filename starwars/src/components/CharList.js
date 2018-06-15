import React from "react";
import "./App.css";

const CharList = props => {
    return props.CharList.map(item => <CharList> key={item.id} charname={item.name} </CharList>);
}

export default CharList;
