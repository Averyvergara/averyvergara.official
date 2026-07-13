document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Avery Vergara's website!");

  const button = document.querySelector("button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Thanks for visiting Avery Vergara Official!");
    });
  }
});
