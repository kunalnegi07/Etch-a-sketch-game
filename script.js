const container = document.querySelector(".container")
const resizeBtn = document.querySelector("#resize");

resizeBtn.addEventListener("click",resize);

function resize (){
    let NoOfGrid = Number(prompt("How many grid's you want? (2-100)"));
    if(NoOfGrid >=2 && NoOfGrid <=100){
        for(i = 0; i<NoOfGrid ; i++){
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
    }
    else{
        alert("Invalid! Give a number beween 2-100");
    }
}