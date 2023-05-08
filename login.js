let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    shopping.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.remove("active")
}

let shopping = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () =>{
    searchForm.classList.remove("active");
    shopping.classList.toggle("active");
    login.classList.remove("active");
    navbar.classList.remove("active")
}

let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    searchForm.classList.remove("active");
    shopping.classList.remove("active");
    login.classList.toggle("active");
    navbar.classList.remove("active")
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    searchForm.classList.remove("active");
    shopping.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.toggle("active")
}

window.oncsroll = () =>{
    searchForm.classList.remove("active");
    shopping.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.remove("active")
}


var swiper = new Swiper(".Product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:4000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
    
  });

  
