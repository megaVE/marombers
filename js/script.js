console.log("JavaScript working")

const mobileButton = document.querySelector("#hamburger-button")

// Ação de abrir e fechar o menu mobile
mobileButton.addEventListener("click", function () {
  const mobileMenu = document.querySelector("#mobile-menu")
  mobileMenu.classList.toggle("hidden")
})
