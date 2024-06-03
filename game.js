let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".new");
let msgCont = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");
let turn = true;
const win = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

];
Array.from(boxes).forEach((box) => {
    box.addEventListener("click",()=>{
    console.log("box was clicked");
   if(turn)
   {
    box.innerText = "O";
    turn = false;
   }
   else{
    box.innerText ="X";
    turn = true;
   }
   box.disabled = true;
   checkWinner();
 });
});
const enablebtn = ()=>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}
const disablebtn = () => {
for(let box of boxes)
{
    box.disabled  = true;
}
};
// const showWinner = (winner) => {
//     msg.innerText =`Congratulations,${winner} is the winner`;
//     msgCont.classList.remove("hide");
//     disablebtn();
// }
const checkWinner = () => {
    for(let pattern of win)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val=== pos3Val)
        {
            
            showWinner(pos1Val);
        }
    }
    
}
};
const Reset = ()=>{
turn = true;
enablebtn();
msgCont.classList.add("hide");

};
newgame.addEventListener("click",Reset);
reset.addEventListener("click",Reset);
const showWinner = (winner) => {
    msg.innerText =`Congratulations,${winner} is the winner`;
    msgCont.classList.remove("hide");
    disablebtn();
}
