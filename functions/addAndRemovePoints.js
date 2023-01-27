export function addAndRemovePoints() {
  const points = document.querySelectorAll(".points");
  const btnAdd = document.querySelectorAll(".add");
  const btnLess = document.querySelectorAll(".remove");

  const availablePoints = document.getElementById("total");

  for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", () => {
      points[i].innerText++;
      availablePoints.innerText--;
      if (availablePoints.innerText < 0) {
        points[i].innerText--;
        availablePoints.innerText++;
      }
    });

    btnLess[i].addEventListener("click", () => {
      points[i].innerText--;
      availablePoints.innerText++;
      if (points[i].innerText < 0) {
        points[i].innerText++;
        availablePoints.innerText--;
      }
    });
  }
}
