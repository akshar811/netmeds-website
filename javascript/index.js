import navbar from "../components/nav.js";
document.getElementById("nav").innerHTML = navbar()

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer()


const display = (data) => {
    document.getElementById("box2").innerHTML = "";
    data.map((product) => {
        
        let image = document.createElement("img");
        image.src = product.image;
        image.addEventListener("click", () =>{
          localStorage.setItem("id", product.id)
          localStorage.setItem("category","productindex1")
          window.location.href="../pages/details.html"
        })

      let title = document.createElement("h2");
      title.innerHTML = product.title;

      let description = document.createElement("h3");
      description.innerHTML = product.description;

      let price = document.createElement("h4");
      price.innerHTML = product.price;

      let discount = document.createElement("h5");
      discount.innerHTML = product.discount;
      
      let filter = document.createElement("span");
      filter.innerHTML = product.filter;

      let filters = document.createElement("span");
      filters.innerHTML = product.filters;

       let del = document.createElement("del");
       del.innerHTML = product.del;

      let rating = document.createElement("span");
      rating.innerHTML = product.rating;

      if (product.rating > 4) {
        rating.style.color = "green";
      } else if (product.rating<= 4 && product.rating >= 3) {
        rating.style.color = "#666666";
      } else {
        rating.style.color = "red";
      }
      let icn = document.createElement("img");
      icn.setAttribute("class", "img-1")
      icn.src = product.icn;
      let btn = document.createElement("button");
      btn.innerHTML = "ADD TO CART";
      btn.addEventListener("click",() => {
        let loggedIn = localStorage.getItem("login");
           
        if (loggedIn) {
            fetch(" http://localhost:3000/cart", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(product)
            })
        }
        else {
            alert("please first login then you can add to cart")
            setTimeout(
                window.location.href = "../pages/login.html"
                , 1000)
        }
      });
      let div = document.createElement("div");
      // div.setAttribute("class","p-3");
      let div2 = document.createElement("div2");
       div.append(div2);
       div2.setAttribute("class","div2")
      div2.append(image,discount , icn , rating , title,  filter , filters , description , price , del, btn);
      document.getElementById("box2").append(div);
    });
  };

let product1;

fetch("http://localhost:3000/productindex1")
.then((response) => response.json())
.then((response) => {
  product1 = response;
  display(product1);
})