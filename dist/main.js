(()=>{"use strict";const e=()=>{const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("div");t.classList.add("title-image");const n=document.createElement("h3");n.textContent="Welcome to Los Santos Restaurant",n.classList.add("home-title");const d=document.createElement("img");d.src="images/restaurant-pic.jpg",d.alt="Restaurant pic with swimming pool and drinks view",t.appendChild(n),t.appendChild(d);const a=document.createElement("div");a.classList.add("intro-para");const o=document.createElement("p");o.textContent="The best restaurant in the city. Any doubts? No? Okay. That's what I thought.";const c=document.createElement("p");return c.textContent="Our focus is to offer high quality international cuisine with the elegance of fine-dining while in a relaxed and comfortable atmosphere. Our menu offers freshly made and unique innovative dishes and our service is attentive and gracious.",a.appendChild(o),a.appendChild(c),e.appendChild(t),e.appendChild(a),e}())};function t(e,t){const n=document.createElement("div"),d=document.createElement("div");d.textContent=e;const a=document.createElement("div");return a.textContent=t,n.appendChild(d),n.appendChild(a),n}const n=()=>{const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");return e.classList.add("menu"),e.appendChild(t("Pizza","Tasty food fr")),e.appendChild(t("Pizza","Tasty food fr")),e.appendChild(t("Pizza","Tasty food fr")),e.appendChild(t("Pizza","Tasty food fr")),e.appendChild(t("Pizza","Tasty food fr")),e}())},d=()=>{const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("p");t.textContent="111-222-3333",t.classList.add("phoneNumber");const n=document.createElement("p");n.textContent="dontusethis@email.com",n.classList.add("emailAddress");const d=document.createElement("h4");return d.textContent="Rockford Hills, Los Santos",e.appendChild(t),e.appendChild(n),e.appendChild(d),e}())};(()=>{const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("div");t.classList.add("navbar");const a=document.createElement("li");a.textContent="Home";const o=document.createElement("li");o.textContent="Menu";const c=document.createElement("li");return c.textContent="Contact",t.appendChild(a),t.appendChild(o),t.appendChild(c),a.addEventListener("click",e),o.addEventListener("click",n),c.addEventListener("click",d),t}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("main"),e}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e.textContent="footer",e}()),e()})()})();