import navbar from "../components/nav.js";
document.getElementById("nav").innerHTML = navbar()

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer()
let data=""
let id =  localStorage.getItem("id")
let category=localStorage.getItem("category")
fetch( `http://localhost:3000/${category}/${id}`)
.then((response) => response.json())
.then((response) =>{
    data = response
    document.getElementById("title").innerHTML = response.title
    document.getElementById("img").src=response.image
    document.getElementById("filter").innerHTML = response.filter
    document.getElementById("filters").innerHTML = response.filters
    document.getElementById("rating").innerHTML = response.rating
    document.getElementById("price").innerHTML =`$ ${response.price}`
    document.getElementById("del").innerHTML = response.del
    document.getElementById("description").innerHTML = response.description
    document.getElementById("discount").innerHTML=response.discount

});

document.getElementById("cartbtn").addEventListener("click",()=>{
    let loggedIn = localStorage.getItem("login");
           
    if (loggedIn) {
        fetch(" http://localhost:3000/cart", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        });
    }
    else {
      alert("please first login then you can add to cart")
      setTimeout(
          window.location.href = "../pages/login.html"
          , 1000);
      }
});