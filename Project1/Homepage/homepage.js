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

const asciiFrame = document.querySelector(".ascii-frame");
const fullText = document.getElementById("fullText");
const closeBtn = document.getElementById("closeFullText");

asciiFrame.addEventListener("click", () => {
  fullText.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  fullText.classList.remove("active");
});

const landing = document.getElementById("landing");
const mainContent = document.getElementById("main-content");

function enterSite() {
  landing.classList.add("hidden");
  mainContent.classList.add("visible");

  setTimeout(() => {
    landing.remove();
  }, 700);
}

landing.addEventListener("click", enterSite);

setTimeout(enterSite, 30000);