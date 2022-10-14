const Btns = document.querySelectorAll("body .tabs .tabs_center .tabs_center-about .about_btn .about_btn-tab");
const articles = document.querySelectorAll("body .tabs .tabs_center .tabs_center-about .about_content .content") // bài viết
const About = document.querySelector("body .tabs .tabs_center .tabs_center-about");
// xác định data--id rồi click vào thì sẽ remove của div đang có rồi add active vào cái chưa có
// articles remove tương tự nhưng khi add thì phải xác định id đã truyền sẵn ở đầu
About.addEventListener("click",function(e){
    const id=  e.target.dataset.id;
    if(id){
        // remove active from other buttons -- loại bỏ active khỏi buttons
        Btns.forEach(function(btn){
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        //hide other article
        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})  