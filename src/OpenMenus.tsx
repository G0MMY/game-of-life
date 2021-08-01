import React from "react";
import {CloseMenuButton} from "./buttons";
import {colorChanger} from "./itemsBehavior";
import {glider_grid, toad_grid, pulsar_grid, penta_grid, ship_grid} from "./initialize";

export let color='seagreen'

export function OpenColorMenu(){
    return (
        <div className="menu" id="menu">
            <CloseMenuButton/>
            <form id="form">
                <input type="radio" id="red" name="color" value="red" onClick={()=>{
                    let lastColor=color
                    color="red"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="red">Red</label><br/><br/>
                <input type="radio" id="blue" name="color" value="blue" onClick={()=>{
                    let lastColor=color
                    color="blue"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="blue">Blue</label><br/><br/>
                <input type="radio" id="purple" name="color" value="purple" onClick={()=>{
                    let lastColor=color
                    color="purple"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="purple">Purple</label><br/><br/>
                <input type="radio" id="green" name="color" value="green" onClick={()=>{
                    let lastColor=color
                    color="green"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="green">Green</label><br/><br/>
                <input type="radio" id="orange" name="color" value="orange" onClick={()=>{
                    let lastColor=color
                    color="orange"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="orange">Orange</label><br/><br/>
                <input type="radio" id="pink" name="color" value="pink" onClick={()=>{
                    let lastColor=color
                    color="pink"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="pink">Pink</label><br/><br/>
                <input type="radio" id="coral" name="color" value="coral" onClick={()=>{
                    let lastColor=color
                    color="coral"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="coral">Coral</label><br/><br/>
                <input type="radio" id="gold" name="color" value="gold" onClick={()=>{
                    let lastColor=color
                    color="gold"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="gold">Gold</label><br/><br/>
                <input type="radio" id="seagreen" name="color" value="seagreen" onClick={()=>{
                    let lastColor=color
                    color="seagreen"
                    colorChanger(lastColor)
                }}/>
                <label htmlFor="seagreen">SeaGreen</label><br/><br/>
            </form>
        </div>
    );
}

export function OpenLexiconMenu(){
    return (
        <div className="lexicon" id="lexiconMenu">
            <CloseMenuButton/>
            <div className="toad" id="toad">
                {toad_grid}
            </div>
            <div className="glider" id="glider">
                {glider_grid}
            </div>
            <div className="pulsar" id="pulsar">
                {pulsar_grid}
            </div>
            <div className="penta" id="penta">
                {penta_grid}
            </div>
            <div className="ship" id="ship">
                {ship_grid}
            </div>
        </div>
    )
}