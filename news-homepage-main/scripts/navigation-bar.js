const navButton = document.getElementById("nav-button");
const navigation = document.getElementById("navigation");
const closeButton = document.getElementById("close-bar");
const navItems = document.getElementById("nav-menu").children;

Array.from(navItems).forEach((item) => item.addEventListener("click", close))
navButton.addEventListener("click", open)
closeButton.addEventListener("click", close)

window.addEventListener("scroll", () => {
  if(navigation.style.display == "block"){
    navigation.style.top = `${window.scrollY}px`;
  }
})

function open(){
  console.log("here")
  navButton.style.transform = `rotateZ(-90deg)`;
  navigation.style.display = "block";
  navigation.style.top = `${window.scrollY}px`;
}

function close(){
  navButton.style.transform = `rotateZ(0deg)`;
  navigation.style.display = "none";
}