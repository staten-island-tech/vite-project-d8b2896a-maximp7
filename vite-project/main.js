import "../styles/style.css";
import { menu } from "./menu";
import "./variable.css";

document.querySelector(".main").addEventListener("click", function () {
  if (document.body.classList.contains("summer")) {
    document.body.classList.add("winter");
    document.body.classList.remove("summer");
  } else {
    document.body.classList.add("summer");
    document.body.classList.remove("winter");
  }
});

const DOMSelectors = {
  allb: document.querySelector("#All"),
  Veganb: document.querySelector("#Vegan"),
  summerb: document.querySelector("#Summer"),
  winterb: document.querySelector("#Winter"),
  Appetizerb: document.querySelector("#Appetizer"),
  Tastyb: document.querySelector("#Tasty"),
  cardcontainer: document.querySelector(".cardcontainer"),
};

function erase() {
  DOMSelectors.cardcontainer.innerHTML = "";
}

function ItemDisplay(menu) {
  document.querySelector(".cardcontainer").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <div class="card-image">
        <img class="pic" src="${menu.img}" width="220rem" height="240rem">
      </div>
      <div class="card-content">
        <h3>${menu.name}</h3>
        <p>$${menu.price}</p>
      </div>
  </div>`
  );
}

function Displaying() {
  menu.forEach((menu) => {
    ItemDisplay(menu);
  });
}
Displaying();

function displayall() {
  menu
    .filter((menu) => menu.All === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}

function displayVegan() {
  menu
    .filter((menu) => menu.Vegan === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displaySummer() {
  menu
    .filter((menu) => menu.Summer === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displayWinter() {
  menu
    .filter((menu) => menu.Winter === true) 
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displayAppetizer() {
  menu
    .filter((menu) => menu.Appetizer === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displayTasty() {
  menu
    .filter((menu) => menu.Tasty === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}

function Veganp() {
  erase();
  displayVegan();
}

function Allp() {
  erase();
  displayall();
}

function Summerp() {
  erase();
  displaySummer();
}
function Winterp() {
  erase();
  displayWinter();
}

DOMSelectors.Veganb.addEventListener("click", Veganp);
DOMSelectors.allb.addEventListener("click", Allp);
DOMSelectors.summerb.addEventListener("click", Summerp);
DOMSelectors.winterb.addEventListener("click", Winterp);