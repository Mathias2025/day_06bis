document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.querySelector("#cart-items");
  const totalPriceElement = document.querySelector("#total-price");
  let totalPrice = 0;

  // Fonction pour mettre à jour le prix total
  function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach((item) => {
      const price = parseFloat(
        item.querySelector(".cart-price").textContent.replace("$", "")
      );
      const quantity = parseInt(item.querySelector(".cart-quantity").value);
      total += price * quantity;
    });
    totalPriceElement.textContent = total.toFixed(2);
  }

  // Fonction ajouter au panier
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const item = event.target.closest(".item");
      const productId = item.getAttribute("data-id"); // Utiliser l'attribut data-id
      const description = item.querySelector(".description").innerHTML;
      const price = item.querySelector(".total-price").textContent;
      const quantity = item.querySelector("input").value;

      // Créer un identifiant unique basé sur l'ID du produit et sa description (chatGPT)
      const uniqueId = `${productId}-${description
        .trim()
        .replace(/\s+/g, "-")}`;

      // déja dans le panier ?
      let existingCartItem = cartItemsContainer.querySelector(
        `[data-id='${uniqueId}']`
      );
      if (existingCartItem) {
        // +produit si oui
        let cartQuantityInput =
          existingCartItem.querySelector(".cart-quantity");
        cartQuantityInput.value =
          parseInt(cartQuantityInput.value) + parseInt(quantity);
      } else {
        // nouvel élément panier
        const cartItem = `
                    <div class="cart-item" data-id="${uniqueId}">
                        <div>${description}</div>
                        <input type="number" class="cart-quantity" value="${quantity}" min="1" />
                        <span class="cart-price">${price}</span>
                        <button class="remove-item-btn">Remove</button>
                    </div>
                `;
        cartItemsContainer.insertAdjacentHTML("beforeend", cartItem);
      }

      updateTotalPrice();
      setupRemoveItemButtons();
      setupQuantityChange();
    });
  });

  // delete produit
  function setupRemoveItemButtons() {
    document.querySelectorAll(".remove-item-btn").forEach((button) => {
      button.addEventListener("click", () => {
        button.closest(".cart-item").remove();
        updateTotalPrice();
      });
    });
  }

  // quantité panier
  function setupQuantityChange() {
    document.querySelectorAll(".cart-quantity").forEach((input) => {
      input.addEventListener("change", () => {
        if (input.value < 1) input.value = 1;
        updateTotalPrice();
      });
    });
  }

  // augmenter la quantité liste produits
  document.querySelectorAll(".plus-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.nextElementSibling;
      let currentValue = parseInt(input.value);
      input.value = currentValue + 1; // Augmente la quantité
    });
  });

  // diminuer la quantité liste produits
  document.querySelectorAll(".minus-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.previousElementSibling;
      let currentValue = parseInt(input.value);
      if (currentValue > 1) {
        input.value = currentValue - 1; // Diminue la quantité
      }
    });
  });
});
