// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// forEach là lấy lần lượt từng giá trị trong  mảng  chuyển chúng vào trong để xử lý (vòng lặp không dừng lại sẽ từ đầu đến cuối rồi quay lại)
btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    //console.log(e.currentTarget) e.currentTarget để xác định phần tử mà ta đang làm như ở đây là click vào phần tử nào thì hiện phần tử đó. phần tử ở đây là các button
    //.classList là xác định các thêm, bỏ , chuyển các phần tử 
    const styles = e.currentTarget.classList;
    if(styles.contains("Decrease")){
    // .contains(a) để xác định a có phải phần tử con của cái trên không trả về true false
      count--;
    }else if(styles.contains("Increase")){
      count++;
    }else{
      count = 0;
    }
// tạo color cho các value âm , dương và 0
    if(count>0){
      value.style.color = "red"
    }else if(count<0){
      value.style.color= "white";
    }else{
      value.style.color = "black";
    }
    value.textContent = count;
  })
});