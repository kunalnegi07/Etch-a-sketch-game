const container = document.querySelector(".container");
const resizeBtn = document.querySelector("#resize");
const cleargame = document.querySelector("#clear");
const rainbowbtn = document.querySelector("#rainbow");
const blackbtn = document.querySelector("#black");

container.style.userSelect = "none";
let mouseDown = false;
let currentMode = "black";

document.body.addEventListener("mousedown" , () => {
    mouseDown = true;
});

document.body.addEventListener("mouseup" , () => {
    mouseDown = false;
});

resizeBtn.addEventListener("click",resize);

rainbowbtn.addEventListener("click",() => currentMode = "rainbow");

blackbtn.addEventListener("click", () => currentMode = "black");

function createGrid(NoOfGrid){

        container.textContent = "";

        const size = 500/NoOfGrid;

        for(i = 0; i<NoOfGrid*NoOfGrid ; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("division");
        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;
        newDiv.style.backgroundColor = "white";
        newDiv.addEventListener("mouseover",changeColor);
        newDiv.style.border = "none";
        container.appendChild(newDiv);

        }
}

function resize (){
    let NoOfGrid = Number(prompt("How many grid's you want? (2-100)","30"));
    if(NoOfGrid >=2 && NoOfGrid <=100){
        createGrid(NoOfGrid);
    }

    else{
        alert("Invalid! Give a number beween 2-100");
    }
}


function changeColor(e){

    if (e.type === "mouseover" && !mouseDown) return;

    if(currentMode==="rainbow"){
        e.target.style.backgroundColor = generatingRandomRgbColor();
    }else{
        e.target.style.backgroundColor = "black";
    }
}

window.onload = function(){
    createGrid(30);
}

function generatingRandomRgbColor(){
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

cleargame.addEventListener("click", () => window.onload = createGrid(30));

