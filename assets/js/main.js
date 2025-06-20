// document.addEventListener("DOMContentLoaded", function () {
//   // Animation function with delay
//   function animateElement(element, delay) {
//     setTimeout(function () {
//       element.classList.add("animate-in");
//     }, delay * 1000);
//   }

//   // Get elements
//   const headline = document.getElementById("headline");
//   const subhead = document.getElementById("subhead");
//   const ctaButton = document.getElementById("ctaButton");

//   // Animate elements with staggered delays
//   animateElement(headline, 0.2);
//   animateElement(subhead, 0.4);
//   animateElement(ctaButton, 0.6);

//   // Button click handler
//   ctaButton.addEventListener("click", function () {
//     alert("Button clicked! Add your functionality here.");
//     // You could replace this with actual navigation or form opening
//   });
// });

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
// document.addEventListener("DOMContentLoaded", function () {
//   // Intersection Observer for scroll animations
//   const missionContainer = document.getElementById("missionContainer");
//   const missionHeader = document.getElementById("missionHeader");

//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: "0px 0px -100px 0px",
//   };

//   const observer = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         if (entry.target === missionContainer) {
//           entry.target.classList.add("animate-main");
//         }
//         if (entry.target === missionHeader) {
//           entry.target.classList.add("animate-delayed");
//         }
//       }
//     });
//   }, observerOptions);

//   // Observe elements
//   observer.observe(missionContainer);
//   observer.observe(missionHeader);

//   // Load FocusSection content dynamically
//   // This would be replaced with actual FocusSection content
//   document.getElementById("focusSection").innerHTML = `
//                 <div style="background: #1a1a1a; color: white; padding: 40px; border-radius: 8px;">
//                     Focus Section Content Would Appear Here
//                 </div>
//             `;
// });
// document.addEventListener("DOMContentLoaded", function () {
//   // Animate items with staggered delays
//   const items = [
//     { element: document.getElementById("item1"), delay: 0.2 },
//     { element: document.getElementById("item2"), delay: 0.4 },
//     { element: document.getElementById("item3"), delay: 0.6 },
//     { element: document.getElementById("item4"), delay: 0.8 },
//   ];

//   items.forEach((item) => {
//     setTimeout(() => {
//       item.element.classList.add("animate");
//     }, item.delay * 1000);
//   });
// });
