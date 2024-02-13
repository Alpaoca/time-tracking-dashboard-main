import data from "./data.json" assert { type: "json" };

var daily = document.querySelector(".daily");
var weekly = document.querySelector(".weekly");
var monthly = document.querySelector(".monthly");

function clearActive() {
  daily.classList.remove("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");
}

function setActive(element) {
  element.setAttribute("class", element.className + " active");
}

daily.addEventListener("click", (e) => {
  clearActive();
  setActive(e.target);
  changeColor("daily");
});
weekly.addEventListener("click", (e) => {
  clearActive();
  setActive(e.target);
  changeColor("weekly");
});
monthly.addEventListener("click", (e) => {
  clearActive();
  setActive(e.target);
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
