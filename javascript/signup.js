let user = JSON.parse(localStorage.getItem("users")) || [];

const signupdata = (e) => {
  e.preventDefault();
  let user = {
    email: document.getElementById("email").value,
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
  };
  console.log(user);
  var fname = /^[a-zA-Z\-]+$/;
  var lname = /^[a-zA-Z\-]+$/;
  var email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!fname.test(user.fname)) {
    document.getElementById("f_err").innerHTML = "Not a valid name";
  }
  if (!lname.test(user.lname)) {
    document.getElementById("l_err").innerHTML = "Not a valid name";
  }

  if (!email.test(user.email)) {
    document.getElementById("e_err").innerHTML = "Not a valid email address";
  }

  if (
    email.test(user.email) &&
    fname.test(user.fname) &&
    lname.test(user.lname)
  ) {
    fetch(`http://localhost:3000/user?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          localStorage.setItem("loggedIn", true);
          alert("user alredy exists");
          setTimeout(() => {
            window.location.href = "index.html";
          }, 2000);
        } else {
          localStorage.setItem("users", JSON.stringify(user));

          fetch("http://localhost:3000/user", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(user),
          });
        }
      });
  }
};

document.getElementById("signupdata").addEventListener("submit", signupdata);