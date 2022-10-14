const Colors = ["Pink","Purple","Red","Orange","Yellow","Green","Cyan","Blue","Brown","White","Grey"];
const btn = document.getElementById("btn");
const color = document.getElementById("color")

btn.addEventListener("click", function(){
    const rumdomColors = Colors[GetrumdomColors()]
    console.log(GetrumdomColors())
    document.body.style.backgroundColor= rumdomColors;
    color.textContent= rumdomColors 
});
function GetrumdomColors(){
    return Math.floor(Math.random()*(Colors.length))
}