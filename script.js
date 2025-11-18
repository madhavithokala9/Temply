let bars = document.querySelector(".bars.fa-bars");
        let menu = document.querySelector(".menu");

        bars.addEventListener("click", function(){
            menu.classList.toggle("show");

        });
       let Quest = document.querySelectorAll(".question");
       let pera = document.querySelectorAll(".faq-pera");

 Quest.forEach(drop => {
    drop.addEventListener("click",function() {
        pera.forEach(paragraph =>{
            paragraph.classList.remove("ShowQuestion");
        });
        drop.lastElementChild.classList.toggle("ShowQuestion");
    });
});


var swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
    },
    loop: true,
});




    let shopBars = document.querySelector(".shop_bars .fa-list");
    let shopMenu = document.querySelector(".shop_menu_categori");
    let shopMenuLink = document.querySelectorAll(".shop_menu_link")
    
     shopBars.addEventListener("click", () => {
        shopMenu.classList.toggle("show_shop_menu");
    });
    shopMenuLink.forEach(MenuLink => {
        MenuLink.addEventListener("click", () => {
            shopMenu.classList.remove("show_shop_menu");
        });
    });


let carticon = document.querySelector(".cart_menu .fa-cart-shopping");
let cartMenu =document.querySelector(".cart_container");
let closeCart = document.querySelector(".close_cart");

carticon.addEventListener("click", () => {
    cartMenu.classList.toggle("show_cart_menu");
});

closeCart.addEventListener("click", () => {
    cartMenu.classList.toggle("show_cart_menu")
    });

    let productCart = document.querySelector(".Pcart1");