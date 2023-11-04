const button = document.getElementById("buttonId");
console.log("button:", button);

button?.addEventListener("click", () => {
  console.log("click");
});
