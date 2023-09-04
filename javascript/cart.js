import navbar from "../components/nav.js";
document.getElementById("nav").innerHTML = navbar()

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer()

const display = (data) => {
    document.getElementById("cart").innerHTML = ''
    data.map((product) => {
        let div1 = document.createElement("div");
        div1.setAttribute("class", "cartmainbox , col-xl-12 , col-lg-12 , col-sm-12");
        let cartmain = document.createElement("div");
        cartmain.setAttribute("class", "cartmainbox-1")
        let div2 = document.createElement("div");
        let imagebox = document.createElement("div");
        imagebox.setAttribute("class", "productimagebox");
        div2.setAttribute("class", "productdetails");
        let flexmain = document.createElement("div");
        flexmain.setAttribute("class", "flexmain");
        let image = document.createElement("img");
        image.src = product.image;
        let detail  = document.createElement("div");
        let flexbox1 = document.createElement("div");
        flexbox1.setAttribute("class", "detail1");
        let flexbox2 = document.createElement("div");
        flexbox2.setAttribute("class", "detail2");
        let name = document.createElement("h4");
        name.innerHTML = product.title;
        let distri = document.createElement("h5");
        let del = document.createElement("div");
        del.setAttribute("class", "deletebox");
        distri.innerHTML = product.description;
        let price = document.createElement("h5");
        price.innerHTML = `₹  ${product.price}`;
        let qty = document.createElement("h6");
        qty.innerHTML = `qty : ${product.qty}`;
       
        
        let remove = document.createElement("button");
        remove.innerHTML = `remove`
        remove.addEventListener("click",() => {
            fetch(`  http://localhost:3000/cart/${product.id}`, {
                method: "DELETE",

            })
        })
        imagebox.append(image);

        detail.append(name ,  distri);
        flexmain.append(  flexbox2, flexbox1 ,);
        
        del.append(   remove);
        flexbox2.append(price, qty   );
       
        div2.append( detail,flexmain  )
      
        cartmain.append(imagebox, div2  )
        div1.append(cartmain ,   del);
        document.getElementById("cart").append(div1);
       
    });
}

let product;

fetch("  http://localhost:3000/cart")
    .then((response) => response.json())
    .then((response) => {
        product = response;
        display(product);
 });