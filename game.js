let boxes =  document.querySelectorAll(".box");
let reset =  document.querySelector(".reset");
let newbtn = document.querySelector("#playagain");
let msgcontainer = document.querySelector("#msgcontainer");
let msg = document.querySelector("#msg");
let turnO = true;

let winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () => {
    turnO = true;
    enabledBox();
    msgcontainer.classList.add("hide");
}

 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       console.log("box is clicked");
        if(turnO){
            // player1
            box.innerText="O";
            turnO= false;
        }
        else{
            // player2
            box.innerText="X";
            turnO= true;
        }
        box.disabled = true;
        checkwinner();
    })
})

let disabledBox = () => {
    for(box of boxes){
        box.disabled = true;
    }
};

let enabledBox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `${winner} is the winner!`;
    msgcontainer.classList.remove("hide");
    disabledBox();
};

const checkwinner = () => {
    for(let pattern of winpatterns){
       let pos1 = boxes[pattern[0]].innerText;
       let pos2 = boxes[pattern[1]].innerText;    
       let pos3 = boxes[pattern[2]].innerText;

       if(pos1!= "" && pos2 != "" && pos3 != ""){
             if(pos1===pos2 && pos2===pos3){
                console.log("winner is ", pos1);
                showWinner(pos1);
             }

        }

    }
};

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);



