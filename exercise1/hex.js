const Color = [0,1,2,3,4,5,6,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");
 
btn.addEventListener("click",function(){
    let hexcolor = "#";
    for( let i =0 ; i<6; i++){
        hexcolor +=Color[Gethexcolor()];
    }
    console.log(hexcolor)
    document.body.style.backgroundColor = hexcolor;
    color.textContent= hexcolor;
});
function Gethexcolor(){
    return Math.floor(Math.random()*Color.length)
}