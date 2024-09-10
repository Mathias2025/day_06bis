var currentRotation = 0;

// TUrn circle
function rotateCircle(step) {
  const circle = document.getElementById("circle");
  currentRotation += step;
  circle.style.transform = `rotate(${currentRotation}deg)`;
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".rotate-button");

  // Boucler sur chaque bouton pour lui ajouter un événement 'click'
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Récupérer la valeur du bouton (le step de rotation)
      const step = parseInt(button.value);

      if (step === 0) {
        currentRotation = 0;
        rotateCircle(0);
      } else {
        rotateCircle(step);
      }
    });
  });
});
