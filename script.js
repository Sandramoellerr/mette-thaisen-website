/* ============================================================
   script.js

   To små ting:
     1. Marker linket til den side, man står på (fed + understreget).
     2. Luk mobil-menuen automatisk, når man klikker et link i den.

   Menuen selv (åbn/luk) klarer HTML alene med <details> og
   <summary> + CSS – det kræver ingen JavaScript.
   ============================================================ */

/* --- 1. Marker linket til den aktuelle side ------------------------
   Header'en er ens på alle sider, så vi finder selv ud af, hvilket
   menulink der passer til den side, man er på, og sætter
   aria-current="page" på det. base.css styler det link. */
const nuvaerendeSide = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".skrivebord-links a, .menu-links a").forEach(function (link) {
  // Book-knapperne skal ikke fremhæves
  if (link.classList.contains("book-knap") || link.classList.contains("book-knap-desktop")) {
    return;
  }
  const linkMaal = link.getAttribute("href").split("/").pop().split("#")[0];
  if (linkMaal === nuvaerendeSide) {
    link.setAttribute("aria-current", "page");
  }
});

/* --- 2. Luk mobilmenuen når man klikker et link ------------------- */
const mobilmenu = document.querySelector(".mobilmenu");

if (mobilmenu) {
  mobilmenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobilmenu.removeAttribute("open"); // folder <details> sammen igen
    });
  });
}
