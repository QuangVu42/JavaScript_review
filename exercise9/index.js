const btn = document.querySelector("body header .switch_btn");
const video = document.querySelector("body header .video");
const preloader = document.querySelector("body .preloader")
//load web 
window.addEventListener("load",function(){
    preloader.classList.add("hiden_preloader"); 
});
btn.addEventListener("click",function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause(); // cú phát này có trong js sẵn để pause và play rồi
    }else{
        btn.classList.remove("slide");
        video.play();
    }
})