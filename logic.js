let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let turno = true;
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count = 0;
boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        count++;
        console.log("clicked");
        if(turno==true){
            box.innerText = 'O';
            box.style.color = "#588157";
            turno = false;
        }else{
            box.innerText = 'X';
            box.style.color = "#344e41";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
        
    })
    
});


disablebtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
enablebtn = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

checkwinner = ()=>{
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    if(pos1 != "" && pos2 !="" && pos3 !=""){
        if(pos1===pos2 && pos2===pos3){
            disablebtn();
            let h1 = document.createElement("h1");
            h1.innerText = `Congatulations,Winner is ${pos1}`;
            document.querySelector("body").prepend(h1);
        }
    }    
}

};

resetgame = ()=>{
    turno = true;
    enablebtn();
    let h1 = document.querySelector("h1");
    h1.remove();
    // document.querySelector("body").remove("h1");
};

resetbtn.addEventListener("click",resetgame);