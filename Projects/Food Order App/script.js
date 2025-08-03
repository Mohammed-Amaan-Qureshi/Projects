var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const closeBtnX = document.querySelector(".close");
const cardList = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");
const CartTotal = document.querySelector(".cart-total-price");
const cartValue = document.querySelector(".cart-value")
const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const bars = document.querySelector(".fa-bars")

hamburger.addEventListener("click" , (evt)=>{
  evt.preventDefault()
  mobileMenu.classList.toggle("mobile-menu-active")
})
hamburger.addEventListener("click" , (evt)=>{
  evt.preventDefault()
  bars.classList.toggle("fa-xmark")
})

cartIcon.addEventListener("click", () => {
  cartTab.classList.add("cart-tab-active");
});

closeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  cartTab.classList.remove("cart-tab-active");
});
closeBtnX.addEventListener("click", (evt) => {
  evt.preventDefault();
  cartTab.classList.remove("cart-tab-active");
});

let productList = [];
let cartProduct = [];

const updateTotalAmount = () => {
  let totalPrice = 0;
  let totalCartQuantity = 0

  document.querySelectorAll(".item").forEach((item) => {

    const cartQuantity = parseInt(item.querySelector(".quantity").textContent)
    const priceText = item.querySelector(".item-price").textContent;
    const numericPrice = parseFloat(priceText.replace(/[^\d.]/g, ""));

    totalPrice += numericPrice;
    totalCartQuantity += cartQuantity
  });
  CartTotal.innerHTML = `${totalPrice}`;
  cartValue.innerHTML = `${totalCartQuantity}`
};

const showCards = () => {
  productList.forEach((product) => {
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");
    orderCard.classList.add("text-center");
    orderCard.classList.add("wrapper");
    orderCard.classList.add("para");

    orderCard.innerHTML = `
          <div class="card-image">
                <img src="${product.image}" alt="${product.name}" />
              </div>
              <h3>${product.name}</h3>
              <h3><i class="fa-solid fa-indian-rupee-sign"></i>${product.price}</h3>
              <a href="#" class="btn-icon card-btn">Add to cart</a>
        `;
    cardList.appendChild(orderCard);

    const cardBtn = orderCard.querySelector(".card-btn");

    cardBtn.addEventListener("click", (pvt) => {
      pvt.preventDefault();
      console.log(product.name + " is added");
      addToCart(product);
    });
  });
};

const addToCart = (product) => {
  var existingProduct = cartProduct.find((item) => {
    return item.id === product.id;
  });

  if (existingProduct) {
    
    return;
  }

  cartProduct.push(product);

  let itemQuantity = 1;
  let price = product.price;

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");
  cartItem.classList.add("flex");
  cartItem.innerHTML = `
                   <img src="${product.image}" alt="${product.name}">
                    <div class="item-name">
                        <h3>${product.name}</h3>
                        <p class="item-price"><i class="fa-solid fa-indian-rupee-sign"></i>${price}</p>
                    </div>
                    <div class="item-quantity flex text-center gap-1">
                        <a href="#" class="quantity-btn minus-btn"><i class="fa-solid fa-minus"></i></a>
                        <p class="quantity">${itemQuantity}</p>
                        <a href="#" class="quantity-btn add-btn"><i class="fa-solid fa-plus"></i></a>
                    </div>
    `;
  cartList.appendChild(cartItem);

  const plusBtn = cartItem.querySelector(".add-btn");
  const minusBtn = cartItem.querySelector(".minus-btn");
  const quantity = cartItem.querySelector(".quantity");
  const itemPrice = cartItem.querySelector(".item-price");

  minusBtn.addEventListener("click", (evt) => {
    evt.preventDefault();

    if (itemQuantity <= 1) {
      cartProduct = cartProduct.filter((item) => item.id !== product.id);
      cartList.removeChild(cartItem);
      updateTotalAmount();
      return;
    }

    itemQuantity--;
    quantity.textContent = itemQuantity;
    itemPrice.innerHTML = `${price * itemQuantity}`;

    updateTotalAmount();
  });

  plusBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    itemQuantity++;
    quantity.textContent = itemQuantity;
    itemPrice.innerHTML = `${price * itemQuantity}`;

    updateTotalAmount();
  });

  updateTotalAmount();
};

const initApp = async () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      productList = data;
      showCards();
    });
};

initApp();
