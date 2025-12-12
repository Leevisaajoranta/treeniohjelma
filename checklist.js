const checkboxes = document.querySelectorAll(
  ".exercise-group input[type='checkbox']"
);

const clearButton = document.getElementById("clear-all");

/* Tallennus */
checkboxes.forEach(box => {
  const id = box.dataset.id;

  // Palauta tila sivun latauksessa
  box.checked = localStorage.getItem(id) === "true";

  box.addEventListener("change", () => {
    localStorage.setItem(id, box.checked);
  });
});

/* Clear all */
clearButton.addEventListener("click", () => {
  const confirmClear = confirm("Haluatko varmasti nollata treenin?");

  if (!confirmClear) return;

  checkboxes.forEach(box => {
    box.checked = false;
    localStorage.removeItem(box.dataset.id);
  });
});
