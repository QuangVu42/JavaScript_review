// sử dụng chọn bên trong các element
const Questions = document.querySelectorAll("body .questions .questions_center .questions_center-question");

Questions.forEach(function(question){
    //console.log(question)
    const Btns = question.querySelector(".question_content .question_content-btn");
    //console.log(Btns)
    Btns.addEventListener("click",function(){
        // bật/ tắt nhưng ko tắt phần nội dung khác   
        // if(question.classList.contains("show_question")){
        //     question.classList.remove("show_question")
        // }else{
        //     question.classList.add("show_question")
        // }
        Questions.forEach(function(item){
           if(item !== question){
               item.classList.remove("show_question")
           }
        })
        question.classList.toggle("show_question")
    })
})


// khi sử dụng dom 
// khai bao phan tu chon
// using selectors inside the element
// const Btns = document.querySelectorAll("body .questions .questions_center .questions_center-question .question_content .question_content-btn");

// Btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         // console.log(e.currentTarget.parentElement.parentElement);
//         // // parentElement return về div cha vd body return về html
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show_question")
//     })
// })