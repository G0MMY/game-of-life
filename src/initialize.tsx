import React from 'react';
import {color} from "./OpenMenus";

function grids(length:number, width:number, click:boolean, id:string){
    let result=[]
    for (let i=0;i<length;i++){
        let array=[];
        for(let j=0;j<width;j++){
            if(click){
                array.push(<div className="box" id={i+","+j+id} onClick={initialize}/>);
            } else{
                array.push(<div className="box" id={i+","+j+id}/>);
            }
        }
        result.push(array);
    }
    return result
}
export const items=grids(40, 90, true, " bigBox")
export const toad_grid=grids(6, 6, false," toad")
export const glider_grid=grids(5, 5,false,"glider")
export const pulsar_grid=grids(15,15,false,"pulsar")
export const penta_grid=grids(14, 5, false, "penta")
export const ship_grid=grids(6, 7, false, "ship")

function initialize(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
    if(e.currentTarget.style.backgroundColor===color){
        e.currentTarget.style.backgroundColor='white';
    } else {
        e.currentTarget.style.backgroundColor=color;
    }
}

export function make_toad(){
    for (let i=0;i<6;i++){
        for(let j=0;j<6;j++){
            if(i===2 && j>1 && j<5){
                document.getElementById(toad_grid[i][j].props.id)!.style.backgroundColor=color
            }
            else if(i===3 && j>0 && j<4){
                document.getElementById(toad_grid[i][j].props.id)!.style.backgroundColor=color
            }
        }
    }
}

export function make_glider(){
    for (let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(i===2 && j===1){
                document.getElementById(glider_grid[i][j].props.id)!.style.backgroundColor=color
            } else if(j===3 && i>0 && i<4){
                document.getElementById(glider_grid[i][j].props.id)!.style.backgroundColor=color
            } else if(i===3 && j===2){
                document.getElementById(glider_grid[i][j].props.id)!.style.backgroundColor=color
            }
        }
    }
}

export function make_pulsar(){
    for (let i=0;i<15;i++){
        for(let j=0;j<15;j++){
            if(i===1 || i===6 || i===8 || i===13){
                if(j>2 && j<6){
                    document.getElementById(pulsar_grid[i][j].props.id)!.style.backgroundColor=color
                } else if( j>8 && j<12){
                    document.getElementById(pulsar_grid[i][j].props.id)!.style.backgroundColor=color
                }
            } else if(i>2 && i<6){
                if(j===1 || j===6 || j===8 || j===13){
                    document.getElementById(pulsar_grid[i][j].props.id)!.style.backgroundColor=color
                }
            } else if(i>8 && i<12){
                if(j===1 || j===6 || j===8 || j===13){
                    document.getElementById(pulsar_grid[i][j].props.id)!.style.backgroundColor=color
                }
            }
        }
    }
}

export function make_penta(){
    for (let i=0;i<14;i++){
        for(let j=0;j<5;j++){
            if (j>0 && j<4){
                if(i===1 || i===4 || i===6 || i===7 || i===9 || i===12){
                    document.getElementById(penta_grid[i][j].props.id)!.style.backgroundColor=color
                }
            }
            if (j===2){
                if(i===2 || i===3 || i===10 || i===11){
                    document.getElementById(penta_grid[i][j].props.id)!.style.backgroundColor=color
                }
            }
        }
    }
}

export function make_ship(){
    for (let i=0;i<6;i++){
        for(let j=0;j<7;j++){
            if (i===1 && j>1 && j<=5){
                document.getElementById(ship_grid[i][j].props.id)!.style.backgroundColor=color
            } else if (i===2 && j===1){
                document.getElementById(ship_grid[i][j].props.id)!.style.backgroundColor=color
            } else if (i===4 && j===1){
                document.getElementById(ship_grid[i][j].props.id)!.style.backgroundColor=color
            } else if (i===2 && j===5){
                document.getElementById(ship_grid[i][j].props.id)!.style.backgroundColor=color
            } else if (i===3 && j===5){
                document.getElementById(ship_grid[i][j].props.id)!.style.backgroundColor=color
            } else if (i===4 && j===4){
                document.getElementById(ship_grid[i][j].props.id)!.style.backgroundColor=color
            } 
        }
    }
}
