let user = JSON.parse(localStorage.getItem("users")) || [];

const signupdata = (e) => {
  e.preventDefault();
  let user = {
    email: document.getElementById("email").value,
    fname: document.getElementById("fname").value,
    Password: document.getElementById("Password").value,
  };
  console.log(user);
  var fname = /^[a-zA-Z\-]+$/;
  var email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var Password = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!fname.test(user.fname)) {
    document.getElementById("f_err").innerHTML = "Not a valid name";
  }
 
  if (!Password.test(user.Password)) {
    document.getElementById("p_err").innerHTML =
      "Password is not a valid password";
  }
  if (!email.test(user.email)) {
    document.getElementById("e_err").innerHTML = "Not a valid email address";
  }

  if (
    email.test(user.email) &&   Password.test(user.Password) && 
    fname.test(user.fname) 
  ) {
    fetch(`http://localhost:3000/user?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          localStorage.setItem("loggedIn", true);
          alert("user alredy exists");
          setTimeout(() => {
            window.location.href = "/pages/login.html";
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