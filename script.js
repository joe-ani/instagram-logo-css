const btn = document.querySelector(".search-icon-cont");
const input = document.querySelector("#name")
const icon = document.querySelector(".icon")

btn.addEventListener("click", () => {
  if (input.getAttribute("data-toggle") === "false") {
    input.setAttribute("data-toggle", true);
    icon.setAttribute("data-animate", true)
} else if (input.getAttribute("data-toggle") === "true") {
      icon.setAttribute("data-animate", false)
    input.setAttribute("data-toggle", false);
  }
});
