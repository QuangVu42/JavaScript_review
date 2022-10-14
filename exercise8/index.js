// get only unique categories - HARDEST ONE : chỉ xác nhận các mục duy nhất: Cứng duy nhất ( các div chính)
// iterate over categories return buttons: lặp lại các nút trả về danh mục
// make sure to select buttons when they are available : đảm bảo chọn các nút khi chúng có sẵn 

// items
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 39.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const MenuContent = document.querySelector("body .menu .menu_content");
const MenuBtns = document.querySelector("body .menu .menu_option");

//khi load items
window.addEventListener("DOMContentLoaded",function(){ 
    //DOMContentLoaded là sự kiện được triggered khi DOM(Document Object Model) được sẵn sàng. 
    //Điều này có nghĩa là API tương tác với content, style và structure của page sẵn sàng nhận request từ code của bạn.
    // Điêu này có nghĩa là text, html, css đã sẵn sàng nhưng nó cũng không hoàn toàn đơn giản vậy.
   DisplayMenu(menu);
   DisplayMenuButtons();
});

// truy cập API vào html của menu
function DisplayMenu(MenuItems){
    let DisplayMenu = MenuItems.map(function(item){
      // hàm map giống hàm forEach truyền giữ liệu vào vòng lặp, bên trong sẽ return lại - giá trị này sẽ thay thế cho phần tử đó
      //console.log(item); trả về object 
      // dùng dấu `` ko phải dấu ''
      return  `<article class="menu_content-item">
      <img src="${item.img}" alt="${item.title}" class="item_photo">
      <div class="item_info">
          <header>
              <h4>${item.title}</h4>
              <h4 class="item_info-price">$${item.price}</h4> <!--price: giá -->
          </header>
          <p class="item_info-text">${item.desc}</p>
      </div>
  </article>`
  });
  DisplayMenu = DisplayMenu.join("") // join nối các phần tử trong mảng với nhau thành 1 chuỗi 
  // khi join() thì ở giữa 2 mảng sẽ có dấu , còn join("") nối liền nhau
  //console.log(DisplayMenu);
  MenuContent.innerHTML = DisplayMenu;
}

// truy cập API vào html của btn
// tách các categories ra khỏi mảng và cho nó thành 1 mảng
// rồi truyền dữ liệu như trên 
function DisplayMenuButtons(){
  //Reduce là một phương thức sẵn có được sử dụng để thực thi một hàm lên các phần tử của mảng (từ trái sang phải) 
     //với một biến tích lũy để thu về một giá trị duy nhất. 
     //Là một phương thức quan trọng hay sử dụng trong lập trình hàm
     const categories = menu.reduce(function(values,item){
      //Phương thức string.includes() sẽ kiểm tra xem một chuỗi con được người dúng cung cấp có nằm trong chuỗi hay không.
      //  Phương thức sẽ trả về True nếu chuỗi chứa chuỗi con mà người dùng cung cấp, ngược lại sẽ trả về False.
      //string.includes(searchvalue, start)
      // searchvalue là chuỗi con cần kiểm tra trong string
      // start là vị trí bắt đầu kiểm tra ở chưỡi string
      //mặc định mang giá trị 0 tức là phương thức sẽ kiểm tra từ đầu chuỗi.
      if(!values.includes(item.category)){ // values.include(item.category) là xác định đúng trả vể 1 ban đầu là all , ! xác định tất cả rồi push vào mảng
        values.push(item.category)
      }
      return values;
     },['all']) // xác định giá trị ban đầu 
     // ta được mảng gồm các category giờ chuyển API này cho html
     const CategoryBtns = categories.map(function(category){
       return `<button class="menu_option-btn" data-id="${category}">${category}</button>`
     }).join("")
     MenuBtns.innerHTML = CategoryBtns;

  const FilterBtns = document.querySelectorAll("body .menu .menu_option .menu_option-btn");
  //fitler button
  // xác định khi click thì đó là category nào rồi
  // khi click trong mảng menu có những cái như thế ko
  FilterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
      const category = e.currentTarget.dataset.id;
      const MenuCategory = menu.filter(function(MenuItems){
        //Hàm filter được tích hơp sẵn trong đối tượng mảng giống như hàm map trong javascript.
        // Về cách thức hoạt động thì nó giống hàm map, nghĩa là nó sẽ có một tham số dạng function 
        //và function này sẽ xử lý cho mỗi lần lặp. Nếu function return true thì phần tử lần lặp đó được chấp nhận,
        //  ngược lại sẽ không được chấp nhận.
        // consolo.log(MenuItems.category)
        // coi trong mang có những cái nào có tên trùng 
        if(MenuItems.category===category){
          return MenuItems
        }
      })
      // thiết lập khi click thì show ra những cái nào có cùng category 
      // ban đầu là mảng tất cả , bây giờ là có những cái category giống nhau thôi
      if(category==='all'){
        DisplayMenu(menu)
      }else{
        DisplayMenu(MenuCategory)
      }
      //console.log(MenuCategory);
    })
  })
}
