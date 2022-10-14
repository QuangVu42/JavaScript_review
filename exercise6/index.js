// cách viết thông thường
// const Btn = document.querySelector("body .banner .banner_content .banner_content-btn");
// const Content = document.querySelector("body .aside");
// const RemoveContent = document.querySelector("body .aside .aside_content .aside_content-btn");

// Btn.addEventListener("click",function(){
//     // console.log(Content.classList);
//     // console.log(Content.classList.contains("aside"));
//     Content.classList.add("aside_show");
// })

// RemoveContent.addEventListener("click",function(){
//         Content.classList.remove("aside_show")
// })
// // cách viết DOM theo dự án ( khoa học hơn )
var Content = {
    run:function(){
        this.show();
        this.close()
    },
    show:function(){
        const Btn = document.querySelector("body .banner .banner_content .banner_content-btn");
        const Content = document.querySelector("body .aside");
            Btn.addEventListener("click",function(){
                Content.classList.add("aside_show")
            })
    },
    close:function(){
        const Content = document.querySelector("body .aside");
        const RemoveContent = document.querySelector("body .aside .aside_content .aside_content-btn");
            RemoveContent.addEventListener("click",function(){
                Content.classList.remove("aside_show")
            })
    }
}
Content.run(); 