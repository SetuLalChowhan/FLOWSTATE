document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");
  const scrollThreshold = 50; // Number of pixels to scroll before changing opacity

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Optional: Add language toggle functionality
  const languageSelector = document.querySelector(".language-selector");

  languageSelector.addEventListener("click", function () {
    // Toggle between DE and EN
    // const current = this.innerHTML.includes("DE</span>")
    //   ? "EN</span>  |  DE"
    //   : "DE</span>  |  EN";
    // this.innerHTML = current;
  });
});
