const Login = (e) => {
    e.preventDefault();
    let Password = document.getElementById("Password").value;
    let email = document.getElementById("email").value;
    fetch(`http://localhost:3000/user?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.length > 0) {
                if (data[0].Password === Password) {
                    localStorage.setItem("loggedIn", true);
                    alert("login success");
                }
                else {
                    alert("login invalid");
                }
            }
            else {
                alert("user not found");
            }
        });
};
document.getElementById("signupdata").addEventListener("submit", Login);

