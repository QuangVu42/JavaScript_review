// classList - shows/gets all class
//contains - checks classList for speacific class // kiểm tra lớp cụ thể
// add - add class
// remove - remove class
//toggle - toggles class (bật tắt)

const Btn = document.querySelector(".container .header_nav .header_nav-header .header_btn");
const Menu = document.querySelector("body header .container .header_nav .header_nav-menu");

Btn.addEventListener("click",function(){
    //console.log(Menu.classList)
    //console.log(Menu.classList.contains("header_nav-menu")) return tru or false coi trong đó có class đó không
    // nêu dùng if else
    // if(Menu.classList.contains("menu_show")){
    //     Menu.classList.remove("menu_show")
    // }else{
    //     Menu.classList.add("menu_show")
    // }
    // nếu dùng toggle ( 2 cái đều thêm và bật tắt)
    Menu.classList.toggle("menu_show")
})

