import React from 'react';
import {color} from "./OpenMenus";
import {items} from "./initialize";
import {rule} from "./gameRules";

let toggle:NodeJS.Timeout;
let stop:boolean = true
let speed:number = 300

function start(){
    if (stop){
        toggle = setInterval(rule,speed)
        document.getElementById("start")!.textContent="Pause"
        stop=false
    } else{
        document.getElementById("start")!.textContent="Start"
        clearInterval(toggle)
        stop=true
    }
}

function refresh(){
    clearInterval(toggle)
    if(!stop){
        document.getElementById("start")!.textContent="Start"
    }
    stop=true
    items.forEach((elem)=>{
        elem.forEach((val)=>{
            if(document.getElementById(val.props.id)!.style.backgroundColor===color){
                document.getElementById(val.props.id)!.style.backgroundColor='white'
            }
        })
    })
}

function openColorMenu(){
    document.getElementById("menu")!.style.width = "15%";
    document.getElementById("menu")!.style.padding = "30px";
    document.getElementById("menu")!.style.paddingTop = "60px";
    document.getElementById("container")!.addEventListener("click", closeMenu)
}

function lexiconMenu(){
    document.getElementById("lexiconMenu")!.style.transition="0.5s"
    document.getElementById("lexiconMenu")!.style.width = "15%";
    document.getElementById("lexiconMenu")!.style.padding = "30px";
    document.getElementById("lexiconMenu")!.style.paddingTop = "60px";
    document.getElementById("container")!.addEventListener("click", closeMenu)
}

function closeMenu(){
    document.getElementById("menu")!.style.width = "0";
    document.getElementById("menu")!.style.padding = "0";
    document.getElementById("lexiconMenu")!.style.width = "0";
    document.getElementById("lexiconMenu")!.style.padding = "0";
    document.getElementById("container")!.removeEventListener("click", closeMenu)
}

export function ButtonReload(){
    return <button type="button" id="reload" className="button" onClick={refresh}>Reload</button>;
}

export function ButtonStart(){
    return <button type="button" id="start" className="button" onClick={start}>Start</button>;
}

export function ColorButton(){
    return <button type="button" id="color" className="button" onClick={openColorMenu}>Pick Color</button>;
}

export function ButtonLexicon(){
    return <button type="button" id="lexicon" className="button" onClick={lexiconMenu}>Lexicon</button>;
}

export function CloseMenuButton(){
    return  (<button type="button" className="close" aria-label="Close" id="closeMenu" onClick={closeMenu}>
                <span aria-hidden="true">&times;</span>
            </button>);
}

export function SpeedChanger(){
    return (
        <div>
            <form id="speedForm">
                <label htmlFor="speed">Speed: </label>
                <input type="range" id="speed" min="0" max="980" defaultValue="600" onChange={(e)=>{
                    let string = e.target.value
                    speed=1000-(parseInt(string))
                    if (!stop){
                        clearInterval(toggle)
                        toggle = setInterval(rule,speed)
                    }
                }}/>
            </form>
        </div>
    )
}






