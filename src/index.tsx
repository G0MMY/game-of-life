import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ButtonStart, ButtonReload, ColorButton, ButtonLexicon, SpeedChanger} from "./buttons";
import {items, make_toad, make_glider, make_pulsar, make_penta, make_ship} from "./initialize";
import {dragItem} from "./itemsBehavior";
import {OpenColorMenu, OpenLexiconMenu} from "./OpenMenus";

function Grid() {
    return (
        <div id="container" className="container">
            <div className="header">Conway's Game of Life</div>
            <div className="grid">
                <div className="bigBox">
                    {items}
                </div>
            </div>
            <div className="buttons">
                <ButtonLexicon/>
                <ColorButton/>
                <ButtonStart/>
                <ButtonReload/>
                <SpeedChanger/>
            </div>
        </div>
    );
}


function App(){
    return (
        <div id="app">
            <Grid/>
            <OpenColorMenu/>
            <OpenLexiconMenu/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

make_glider()
make_toad()
make_pulsar()
make_penta()
make_ship()
dragItem("toad", ["glider", "pulsar", "penta", "ship"])
dragItem("glider", ["toad", "pulsar", "penta", "ship"])
dragItem("pulsar", ["toad", "glider", "penta", "ship"])
dragItem("penta", ["toad", "glider", "pulsar", "ship"])
dragItem("ship", ["toad", "glider", "pulsar", "penta"])




