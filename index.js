const btn = document.getElementsByClassName("section1Circle");
const homepage = document.getElementById("section1");
function reset() {
  for (item of btn) {
    item.classList.remove("homeImageSelected");
  }
}

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    reset();
    btn[i].classList.add("homeImageSelected");
    homepage.style.backgroundImage = `url("./assests/BG/BG${i + 1}.jpg")`;
  });
}

