import {glider_grid, items, penta_grid, pulsar_grid, ship_grid, toad_grid} from "./initialize";
import {color} from "./OpenMenus";

export function dragItem(id:string, otherids:string[]):void{
    const container = document.getElementById("lexiconMenu")!
    const item = document.getElementById(id)!
    const margTop = item.style.marginTop
    const margLeft = item.style.marginLeft

    let x0 = document.getElementById(items[0][0].props.id)!.getBoundingClientRect().x
    let x1 = document.getElementById(items[0][89].props.id)!.getBoundingClientRect().x
    let y0 = document.getElementById(items[0][0].props.id)!.getBoundingClientRect().y
    let y1 = document.getElementById(items[39][0].props.id)!.getBoundingClientRect().y

    if (id==="glider"){
        x0-=30
        x1-=40
        y1-=40
    } else if(id==="pulsar"){
        y1-=200
        x1-=250
    } else if(id==="toad"){
        y1-=40
        x1-=70
    } else if (id==="penta"){
        x1-=50
        y1-=200
    } else if (id==="ship"){
        x1-=100
        y1-=70
    }

    let array:JSX.Element[][]
    if(id==="toad"){
        array = toad_grid
    } else if (id==="glider"){
        array = glider_grid
    } else if (id==="pulsar"){
        array = pulsar_grid
    } else if (id==="penta"){
        array = penta_grid
    } else if (id==="ship"){
        array = ship_grid
    }

    let active = false;
    let currentX:number;
    let currentY:number;
    let initialX:number;
    let initialY:number;

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e:MouseEvent) {
        initialX = e.clientX;
        initialY = e.clientY;

        if (e.target instanceof Element){
            if (e.target.parentElement === item) {
                container.style.backgroundColor="transparent"
                container.style.width="120%"
                container.style.transition="none"
                otherids.forEach((other)=>{
                    document.getElementById(other)!.style.visibility="hidden"
                })
                active = true;
            }
        }
    }

    function drag(e:MouseEvent) {
        if (active) {
            e.preventDefault();

            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            setTranslate(currentX, currentY, item);
        }
    }

    function setTranslate(xPos:number, yPos:number, el:HTMLElement) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

    function dragEnd() {
        const x = document.getElementById(array[0][0].props.id)!.getBoundingClientRect().x
        const y = document.getElementById(array[0][0].props.id)!.getBoundingClientRect().y

        if(active){
            if(x>x0 && x<x1 && y>y0 && y<y1){
                finalPosCalculator()
                colorCalculator()
                item.style.position="static"
                item.style.marginTop=margTop
                item.style.marginLeft=margLeft
            } else{
                item.style.transform="none"
            }

        }
        container.style.backgroundColor="#111"
        container.style.width="15%"
        container.style.padding="30px"
        container.style.paddingTop="60px"
        otherids.forEach((other)=>{
            document.getElementById(other)!.style.visibility="visible"
        })
        active = false;
    }

    function finalPosCalculator(){
        const fix_X = document.getElementById(array[0][0].props.id)!.getBoundingClientRect().x
        const fix_Y = document.getElementById(array[0][0].props.id)!.getBoundingClientRect().y

        let dist = Math.abs(fix_X-document.getElementById(items[0][0].props.id)!.getBoundingClientRect().x)+Math.abs(fix_Y-document.getElementById(items[0][0].props.id)!.getBoundingClientRect().y)

        let calib_X=0, calib_Y=0

        items.forEach((item, i)=>{
            item.forEach((elem, j)=>{
                let x = document.getElementById(items[i][j].props.id)!.getBoundingClientRect().x
                let y = document.getElementById(items[i][j].props.id)!.getBoundingClientRect().y
                let temp = Math.abs(fix_X-x)+Math.abs(fix_Y-y)
                if(Math.abs(temp)<=dist){
                    dist=temp
                    calib_X = x
                    calib_Y = y
                }
            })
        })
        item.style.position="absolute"
        item.style.top=calib_Y + "px"
        item.style.left=calib_X + "px"
        item.style.transform="none"
        item.style.marginTop="0"
        item.style.marginLeft="0"
    }

    function colorCalculator(){
        const first_toad_x = document.getElementById(array[0][0].props.id)!.getBoundingClientRect().x
        const first_toad_y = document.getElementById(array[0][0].props.id)!.getBoundingClientRect().y

        items.forEach((item,i)=>{
            item.forEach((value,j)=>{
                const item_x = document.getElementById(value.props.id)!.getBoundingClientRect().x
                const item_y = document.getElementById(value.props.id)!.getBoundingClientRect().y
                if(first_toad_x===item_x && first_toad_y===item_y){
                    array.forEach((row,l)=>{
                        row.forEach((elem,m)=>{
                            const val = document.getElementById(array[l][m].props.id)!.style.backgroundColor
                            if(val===color){
                                document.getElementById(items[i+l][j+m].props.id)!.style.backgroundColor=color
                            }
                        })
                    })
                }
            })
        })
    }
}

function colorArray(array:JSX.Element[][], lastColor:string){
    for (let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(document.getElementById(array[i][j].props.id)!.style.backgroundColor===lastColor){
                document.getElementById(array[i][j].props.id)!.style.backgroundColor=color;
            }
        }
    }
}

export function colorChanger(lastColor:string){
    colorArray(items, lastColor)
    colorArray(toad_grid, lastColor)
    colorArray(glider_grid, lastColor)
    colorArray(pulsar_grid, lastColor)
    colorArray(penta_grid, lastColor)
    colorArray(ship_grid, lastColor)
}
