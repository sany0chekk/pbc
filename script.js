const steps = document.querySelectorAll(".builder-step");
const totalProductsElement = document.querySelector("[data-total-products]");

const stepsLength = steps.length;
totalProductsElement.innerHTML = stepsLength;

const handleUpdateCounter = (selectedProducts) => {
  const checkoutBtn = document.querySelector(".header-button");
  const productsCounterElement = document.querySelector(
    "[data-selected-products]"
  );
  productsCounterElement.innerHTML = selectedProducts;
  if (selectedProducts >= stepsLength) {
    checkoutBtn.disabled = false;
  }
};

steps.forEach((step, index) => {
  const productButtons = step.querySelectorAll(".product-card-button");

  productButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.getAttribute("data-selected") === "true") return;

      button.setAttribute("data-selected", "true");

      productButtons.forEach((otherBtn) => {
        if (otherBtn !== button) {
          otherBtn.disabled = true;
          otherBtn.removeAttribute("data-selected");
        }
      });

      const selectedProducts = document.querySelectorAll(
        '[data-selected="true"]'
      ).length;
      handleUpdateCounter(selectedProducts);

      const nextStep = steps[index + 1];
      if (nextStep) {
        nextStep.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
