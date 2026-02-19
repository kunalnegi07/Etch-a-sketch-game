const container = document.querySelector(".container")
const resizeBtn = document.querySelector("#resize");
const newDiv = document.createElement("div");

resizeBtn.addEventListener("click",resize);



function resize (){
    let NoOfGrid = Number(prompt("How many grid's you want? (2-100)"));
    if(NoOfGrid >=2 && NoOfGrid <=100){

        container.textContent = "";

        const size = 500/NoOfGrid;

        for(i = 0; i<NoOfGrid*NoOfGrid ; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("division");
        newDiv.style.width = `${size}px`;
        newDiv.style.height = `${size}px`;
        container.appendChild(newDiv);
        }
        
    }
    else{
        alert("Invalid! Give a number beween 2-100");
    }
}