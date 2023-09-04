import navbar from "../components/nav.js";
document.getElementById("nav").innerHTML = navbar()

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer()

const display = (data) => {
    document.getElementById("box4").innerHTML = "";
    data.map((product) => {
        
      let image = document.createElement("img");
      image.src = product.image;
      image.addEventListener("click", () =>{
        localStorage.setItem("id", product.id)
        localStorage.setItem("category","veterinary")
        window.location.href="../pages/details.html"
      })

      let title = document.createElement("h2");
      title.innerHTML = product.title;

      let description = document.createElement("h3");
      description.innerHTML = product.description;

      let price = document.createElement("h4");
      price.innerHTML = `₹ ${product.price}`;

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
      div.setAttribute("class","col-xl-3 , col-lg-4 , col-sm-12  , p-3" );
      let div2 = document.createElement("div2");
       div.append(div2);
       div2.setAttribute("class","div2")
      div2.append(image,discount , icn , rating , title,  filter , filters , description ,price , del, btn);
      document.getElementById("box4").append(div);
    });
  };

  let product1;

  fetch("   http://localhost:3000/veterinary")
  .then((response) => response.json())
  .then((response) => {
    product1 = response;
    display(product1);
  })
  
// Sorting by price
const handlelth = () => {
  let sorting = product1.sort((a, b) => a.price - b.price);
  display(sorting);
};
document.getElementById("lth").addEventListener("click", handlelth);


const hendlehtl = () => {
  let sorting = product1.sort((a, b) => b.price - a.price);
  display(sorting);
};

document.getElementById("htl").addEventListener("click", hendlehtl);

const hendlehtl1 = () => {
  let sorting = [...product1];
  sorting.sort((a, b) => {
    // Assuming discounts are in the format "X%".
    let discountA = parseFloat(a.discount);
    let discountB = parseFloat(b.discount);
    return discountB - discountA;
  });
  display(sorting);
};

document.getElementById("discount").addEventListener("click", hendlehtl1);

// Search by category
const find = () => {
  let value = document.getElementById("value").value.toLowerCase();
  let data = product1.filter((val) => val.title.toLowerCase().includes(value));
  display(data);
};

document.getElementById("value").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    find();
  }
});

document.getElementById("search").addEventListener("click", find);

