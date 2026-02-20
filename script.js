const container = document.querySelector(".container");
const resizeBtn = document.querySelector("#resize");
const cleargame = document.querySelector("#clear");

container.style.userSelect = "none";
let mouseDown = false;

document.body.addEventListener("mousedown" , () => {
    mouseDown = true;
});

document.body.addEventListener("mouseup" , () => {
    mouseDown = false;
});

resizeBtn.addEventListener("click",resize);


function resize (){
    let NoOfGrid = Number(prompt("How many grid's you want? (2-100)","30"));
    if(NoOfGrid >=2 && NoOfGrid <=100){

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
    else{
        alert("Invalid! Give a number beween 2-100");
    }
}

function changeColor(e){
    if(!mouseDown) return;
        e.target.style.backgroundColor = "black";
    
}

window.onload = function(){
    NoOfGrid = 30;
     if(NoOfGrid >=2 && NoOfGrid <=100){

        container.textContent = "";

        const size = 500/NoOfGrid;

        for(i = 0; i<NoOfGrid*NoOfGrid ; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("division");
        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;
        newDiv.addEventListener("mouseover",changeColor);
        newDiv.style.backgroundColor = "white";
        newDiv.style.border = "none";
        container.appendChild(newDiv);
        }
    }
}

cleargame.addEventListener("click",window.onload = function(){
    NoOfGrid = 30;
     if(NoOfGrid >=2 && NoOfGrid <=100){

        container.textContent = "";

        const size = 500/NoOfGrid;

        for(i = 0; i<NoOfGrid*NoOfGrid ; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("division");
        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;
        newDiv.addEventListener("mouseover",changeColor);
        newDiv.style.backgroundColor = "white";
        newDiv.style.border = "none";
        container.appendChild(newDiv);
        }
    }
});