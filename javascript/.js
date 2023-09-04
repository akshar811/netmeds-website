
  var number=JSON.parse(localStorage.getItem("mobile"))
  var count=false;

  // console.log(typeof(number))

  document.querySelector("#btn11").addEventListener("click",myfunc1)

  function myfunc1(){

    var c=document.querySelector("#phone11").value
    var d=document.querySelector("#phone12").value

    c= Number(c)

       if(count==false)
      {

        if(number== c){
        var aa=Math.floor(100000+Math.random()*900000);
              count=true
             localStorage.setItem("otp",aa)

             alert(`your otp is ${aa}`)
            }
          else if(number!==c) {
               alert("Your number is incorrect")
               
              }
          else if(number==null){
            alert("Please do SignUp first")
          }        
      }

      else if(count){

         if(d==localStorage.getItem("otp"))
         {
           alert("sign in successful")
           window.location.href="signup.html"
         }
         else{
           var aa=localStorage.getItem("otp")
           alert(`correct otp is ${aa}`)

         }

       }
  }


  document.querySelector("#upload").addEventListener("click",myfunc9)
var s=JSON.parse(localStorage.getItem("otp"))
console.log(a)
function myfunc9(){

    if(s==null)
    {
        alert("Please do SignIn First")  
    }
    else{
      window.location.href="upload.html"   
    }

}

document.querySelector("#empty").addEventListener("click",myfunc3)
var k=JSON.parse(localStorage.getItem("userData"))
function myfunc3(){
    if(k==null)
    {
      window.location.href="emptycart.html"
    }
    else{
      window.location.href="cart.html"
    }
}

document.querySelector("#signin").addEventListener("click",myfunc4)
var a=JSON.parse(localStorage.getItem("mobile"))
function myfunc4(){
    if(a==null)
    {
        alert("Please do SignUp/SignIn First")
    }
}