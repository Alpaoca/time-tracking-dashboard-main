import data from "./data.json" assert { type: "json" };
console.log(data[0].timeframes.daily.previous);

var daily = document.querySelector(".daily");
var weekly = document.querySelector(".weekly");
var monthly = document.querySelector(".monthly");

function clearActive() {
  [daily, weekly, monthly].forEach((element) => {
    element.className.replace('active', '')
  });
}

function setActive(element) {
  element.setAttribute('class', element.className + " active");
}

daily.addEventListener("click", (e) => {
  clearActive();
  setActive(e.target);
  changeColor("daily");
});
weekly.addEventListener("click", () => {
  changeColor("weekly");
});
monthly.addEventListener("click", () => {
  changeColor("monthly");
});

/**
 *
 * @param {string} period
 */
function changeColor(period) {
  let description = [
    ".work",
    ".play",
    ".study",
    ".exercise",
    ".social",
    ".selfcare",
  ];

  description.forEach((x, i) => {
    document.querySelector(x + "current").innerText =
      data[i].timeframes[period].current + "hrs";
    document.querySelector(x + "previous").innerText =
      "Last Week - " + data[i].timeframes[period].previous + "hrs";
  });
}
