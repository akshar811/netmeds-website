import navbar from "../components/nav.js";
document.getElementById("nav").innerHTML = navbar()

import footer from "../components/footer.js";
document.getElementById("footer").innerHTML = footer()

let count = 17
let timeout = setInterval(() => {
    count--

    document.getElementById("c1").innerHTML = count

    if (count == 0) {
        clearInterval(timeout)
    }
},100000);

let count1 = 17
let timeout1 = setInterval(() => {
    count1--

    document.getElementById("c2").innerHTML = count1

    if (count1 == 0) {
        clearInterval(timeout1)
    }
},60000);

let count2 = 60
let timeout2 = setInterval(() => {
    count2--

    document.getElementById("c3").innerHTML = count2

    if (count2 == 0) {
        clearInterval(timeout2)
    }
},1000);