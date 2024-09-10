const counterBtn = document.querySelector("#counter-btn");
const counterEl = document.querySelector("#counter");
let count = 0;

counterBtn.addEventListener("click", function () {
  count += 1;
  counterEl.textContent = count;
});
