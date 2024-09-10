function reduceOpacity() {
  const square = document.getElementById("square");
  square.style.opacity = 0.5;
}

function resetOpacity() {
  const square = document.getElementById("square");
  square.style.opacity = 1;
}

document.addEventListener("DOMContentLoaded", () => {
  const square = document.getElementById("square");

  square.addEventListener("mouseover", reduceOpacity);

  square.addEventListener("mouseout", resetOpacity);
});
