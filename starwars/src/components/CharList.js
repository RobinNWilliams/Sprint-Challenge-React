import React from "react";
import "./App.css";
import Characters from './components/Characters';

const CharList = props => {
    return props.CharListArray.map(item => <CharList key={item.id} charName={item.name}> </CharList>);
}

export default CharList;
