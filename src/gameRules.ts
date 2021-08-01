import {items} from "./initialize";
import {color} from "./OpenMenus";

export function rule(){
    const neighbors:number[][]=[]
    items.forEach((elem, i)=>{
        let array:number[]=[]
        elem.forEach((val, j)=>{
            array.push(checkNeighbors(i,j))
        });
        neighbors.push(array)
    });
    deleteNeighbors(neighbors)
}

function checkNeighbors(i:number,j:number){
    let neighbors=0

    if (i!==39 && document.getElementById(items[i+1][j].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }
    if (i!==0 && document.getElementById(items[i-1][j].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }
    if (j!==89 && document.getElementById(items[i][j+1].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }
    if (j!==0 && document.getElementById(items[i][j-1].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }
    if (j!==0 && i!==0 && document.getElementById(items[i-1][j-1].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }
    if (j!==89 && i!==39 && document.getElementById(items[i+1][j+1].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }
    if (j!==0 && i!==39 && document.getElementById(items[i+1][j-1].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }
    if (j!==89 && i!==0 && document.getElementById(items[i-1][j+1].props.id)!.style.backgroundColor===color){
        neighbors+=1
    }

    return neighbors
}

function deleteNeighbors(neighbors:number[][]){
    neighbors.forEach((neighbor,i)=>{
        neighbor.forEach((val,j)=>{
            const doc = document.getElementById(items[i][j].props.id);
            if(val<2 || val>3){
                doc!.style.backgroundColor='white'
            }
            if(val===3 && doc!.style.backgroundColor!==color){
                doc!.style.backgroundColor=color
            }
        });
    });
}