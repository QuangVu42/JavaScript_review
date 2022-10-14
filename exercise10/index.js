// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// Phương thức Element.getBoundsClientRect () trả về kích thước của một phần tử và vị trí của nó so với khung nhìn.
// pageYOffset là thuộc tính cửa sổ chỉ đọc trả về số pixel mà tài liệu đã được cuộn theo chiều dọc.
// lát cắt trích xuất một phần của chuỗi mà không sửa đổi chuỗi gốc
// offsetTop - Một số, đại diện cho vị trí trên cùng của phần tử, tính bằng pixel

//getBoundingClientRect , một phần của JavaScript DOM (Mô hình đối tượng tài liệu),
// cung cấp cho bạn những phần dữ liệu quan trọng về kích thước và vị trí của phần tử HTML . 
//Trong bài viết này, bạn sẽ sử dụng getBoundingClientRect để lấy kích thước và vị trí của một phần tử.

// set date ( cập nhập ngày giờ)
const date = document.querySelector("body footer p .date");
date.innerHTML = new Date().getFullYear();
// show links
const Showlinks = document.querySelector("body header .nav .nav_center .nav_center-links");
const Btn = document.querySelector("body header .nav .nav_center .nav_center-header .header_btn");
const Links = document.querySelector("body header .nav .nav_center .nav_center-links .links")
Btn.addEventListener("click",function(){
    // Showlinks.classList.toggle("show_links") đây là khi height ta mặc định nó là
    // apx khí tăng giảm số lựa link thì sẽ bị lệch
    // sau là căn chỉnh px cho đúng với những số link cần thiết
    const containerShowlinks = Showlinks.getBoundingClientRect().height;
    //console.log(containerShowlinks);
    const containerLinks = Links.getBoundingClientRect().height; // chỉ xác định height
    //console.log(containerLinks)
    if(containerShowlinks === 0){
        Showlinks.style.height = `${containerLinks}px`;
    }else{
        Showlinks.style.height = 0;
    }
})  

// fixed navbar 
const navbar = document.querySelector("body header .nav");
const topLink = document.querySelector("body .scroll_link");
window.addEventListener("scroll",function(){
    //console.log(this.window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeight){
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    // back top top 
    if(scrollHeight >400){
        topLink.classList.add("top_link");
    }else{
        topLink.classList.remove("top_link");
    }
});
// smooth scroll (cuộn đến element cần )
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        // preventDefault: Huỷ bỏ event nếu nó có thể huỷ mà không dừng sự lan rộng(propagation) của event tới phần khác.
        e.preventDefault();
        // navigate to specific spot ( điều chỉnh đến các công cụ cụ thể)

        // getAttribute() Phương thức của Phần tử trả về giá trị của một thuộc tính được chỉ định. 
        // Nếu thuộc tính đã cho không tồn tại, giá trị trả về sẽ là null hoặc "" (chuỗi trống); 
        // xem Thuộc tính không tồn tại để biết chi tiết.

        // slice đây là hàm dùng để trích xuất một số phần tử trong mảng js.
        const id = e.currentTarget.getAttribute("href").slice(1);
        //console.log(id);
        const element = document.getElementById(id);
        // Thuộc tính này cho biết khoảng cách của phần tử bạn chọn với phần tử cha
        // của nó nó tính về phía trên, thông tin là số điểm ảnh pixel.

        //calculate the heights(tính toán chiều cao)
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = Showlinks.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position  = element.offsetTop-navHeight;
        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight>82){
            position= position +containerHeight;
        }
        console.log(position);
        // cuộn tài liệu đến vị trí

        window.scrollTo({
            left: 0,
            top:position,
            behavior: "smooth",
        });
        //Toán tử NOT (!) Trả về true cho các câu lệnh sai và sai cho câu lệnh true
        Showlinks.style.height = 0;
    });
});