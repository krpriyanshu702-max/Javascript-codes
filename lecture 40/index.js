let div = document.querySelector("#reveal")
let h1 = document.querySelector("#winner")

let btn = document.querySelector("#btn")
// div.addEventListener("click", () => {
//     console.log("Hii guys i am good");
//     h1.classList.remove("hidden")
//     h1.classList.add("visible")
// })

function revealwinner(event) {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    // console.log("kya haal chal hai bhailog");
}

div.addEventListener("click", revealwinner)

// btn.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.key);
//     console.log(e.clientX);
//     console.log(e.clientY);
// })

let counter = 0
function fun1(e) {
    if (counter < 3) {
        console.log(e);
        counter++
    } else {
        btn.removeEventListener("click", fun1)
    }
}

btn.addEventListener("click", fun1)
// btn.addEventListener("click", fun1, {once:true})
// btn.removeEventListener("click", fun1)



let outter = document.querySelector("#outter")
let inner = document.querySelector("#inner")

let btn2 = document.querySelector("#btn2")

outter.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("outter");
    
}, )

inner.addEventListener("click", (e) => {
    console.log("inner");
    e.stopPropagation()
},)

btn2.addEventListener("click", (e) => {
    console.log("btn2");
    e.stopPropagation()
})



let products = [
    {
        name: "Iphone 20",
        price: 12342,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Samsung 15",
        price: 62324,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "MI 23",
        price: 35354,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Poco 10",
        price: 43534,
        imgUrl : "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Lava 12",
        price: 53422,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]

    let productList = document.querySelector("#product-list")
console.log(productList);
   products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    
    const deltbtn = document.createElement("button")
      const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to cart"
    deltbtn.textContent = "Remove Product"

    // deltbtn.addEventListener("click", (e) => {
    //     e.stopPropagation()
    //     card.remove()
    // })

    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>
   `
   card.append(deltbtn)
    

    productList.append(card)
   })

  productList.addEventListener("click", (e) => {
    e.stopPropagation()

      const dltbtn = e.target;

    console.log(dltbtn.parentElement);
    console.log(dltbtn.tagName);

    if(dltbtn.tagName === "BUTTON") {
       dltbtn.parentElement.remove()
    }


       // console.log(dltBtn.parentElement.dataset.productId);

    if (dltbtn.textContent === "Remove product" && dltbtn.tagName === "BUTTON") {
        // dltBtn.parentElement.remove()
        // dltBtn.closest(".singleProduct").remove()
    }

    // console.log(dltBtn.closest(".singleProduct"));
  })