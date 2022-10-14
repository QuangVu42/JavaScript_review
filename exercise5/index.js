const BtnOn = document.querySelector(".slider_toggles");
const Slider = document.querySelector(".container .slider");
const BtnOff = document.querySelector("body .slider .slider_header .slider_header-btn");

BtnOn.addEventListener("click",function(){
    // console.log(Slider.classList);
    // console.log(Slider.classList.contains("slider"));
    Slider.classList.add("slider_show")
});
BtnOff.addEventListener("click",function(){
    Slider.classList.remove("slider_show")
})