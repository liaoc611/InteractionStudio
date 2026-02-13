const regions = document.querySelectorAll(".ascii-region");
const overlays = document.querySelectorAll(".overlay");

regions.forEach(region => {

  region.addEventListener("mouseenter", () => {
    const id = region.dataset.passage;

    overlays.forEach(o => o.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  });

  region.addEventListener("mouseleave", () => {
    overlays.forEach(o => o.classList.remove("active"));
  });

});
