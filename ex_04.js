document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".plus-btn");
  const minusButtons = document.querySelectorAll(".minus-btn");
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const likeButtons = document.querySelectorAll(".like-btn");

  // Augmenter la quantité
  plusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.nextElementSibling;
      let currentValue = parseInt(input.value);
      input.value = currentValue + 1; // add 1
    });
  });

  // Fonction pour diminuer la quantité
  minusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.previousElementSibling;
      let currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1; // -1
      }
    });
  });

  // Fonction pour supprimer l'élément
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".item");
      item.remove(); // Supprimer l'élément du DOM
    });
  });

  // Fonction pour activer/désactiver la classe 'is-active' pour le like
  likeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("is-active"); // Toggle de la classe is-active
    });
  });
});
