"use strict";
const tabNavItems = document.querySelectorAll(".buttons-tab");
const tabItems = document.querySelectorAll(".tab");
document.addEventListener("click", function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest(".buttons-tab")) {
    tabNavItems.forEach((tabNavItem, index) => {
      if (tabNavItem.classList.contains("active")) {
        currentActiveIndex = index;
        tabNavItem.classList.remove("active");
      }
      if (tabNavItem === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add("active");
    tabItems[currentActiveIndex].classList.remove("active");
    tabItems[newActiveIndex].classList.add("active");
  }
});

window.addEventListener("load", windowLoad);

function windowLoad() {
  document.addEventListener("click", documentActions);
}
function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.hasAttribute("data-goto")) {
    const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
    const headerHeight = document.querySelector(`.header`).offsetHeight;
    if (gotoElement) {
      window.scrollTo({
        top: gotoElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
    e.preventDefault();
  }
}
