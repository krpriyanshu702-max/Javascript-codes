// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelector("#h1")

// let h1 = document.querySelectorAll("#h1")
// console.log(h1);

// let p = document.querySelector("#desc")

// p.textContent = "<h2>Hello dostoo </h2>"
// p.innerHTML = "<h2>Hello Dostoo </h2>" //very very risky

// console.log(p.textContent); // Hidden texts ko bhi read karta hai
// console.log(p.innerHTML); 
// console.log(p.innerText); // Hidden texts ko read nahi krta hai

// p.setAttribute("style", "background-color: blue; font-size: 50px")

// let btn = document.querySelector("#btn")
// btn.setAttribute("disabled", "false")
// btn.removeAttribute("disabled")
// btn.textContent = "remove"

// let res = p.getAttribute("id")

// console.log(res);

// p.removeAttribute("style")

// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")

// console.log(p.classList.contains("random"));


// p.style.backgroundColor = "red" // camel case

// p.dataset.helloDostoHii  = "kya haal miya"
// console.log(p.dataset.helloDostoHii);

// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent = "Hello"
// div2.textContent = "div2"
// console.log(div);
// console.log(div2);

// let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)

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

    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img")

    // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

    // upperDiv.append(img)

    // card.append(upperDiv)

    // productList.append(card)


    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    productList.append(card)
   })

let h2 = document.querySelector("#h23")

// body.removeChild(h2) // you have to perform on parent

h2.remove() // directly on the element you want to remove

let clone = productList.cloneNode(true);

// body.append(clone)

const items = productList.children

// productList.insertBefore(h2 , items[2]) // for precise positioning

// items[2].before(h2)
items[2].after(h2)