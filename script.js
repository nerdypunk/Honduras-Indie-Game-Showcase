const wishlistButtons = document.querySelectorAll(".wishlist-toggle");
const wishlistCount = document.querySelector("#wishlistCount");

let totalWishlists = 0;

wishlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const alreadyAdded = button.classList.toggle("is-added");
    totalWishlists += alreadyAdded ? 1 : -1;

    button.textContent = alreadyAdded ? "Agregado" : "Agregar";
    button.setAttribute("aria-pressed", String(alreadyAdded));
    wishlistCount.textContent = String(totalWishlists).padStart(2, "0");
  });
});
