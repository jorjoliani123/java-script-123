
let shoot = document.querySelector("#shoot")

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    shoot.style.left = value * 1.5 + "px"
})




function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

 

  