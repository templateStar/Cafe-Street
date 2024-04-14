
function paddding() {
  let block5 = document.querySelector("#block5");
  let section = block5.querySelector("section");
  let blockheight = block5.offsetHeight;
  let secheight = section.offsetHeight;
  let pad = blockheight - secheight;
  let padhalf = Math.floor(pad / 2);
  // console.log(padhalf);
  section.style.paddingTop = padhalf + "px";
  if (padhalf == 0) {
    section.style.paddingTop = 25 + "px";
  }
}
function paddding1() {
  let block4 = document.querySelector("#boat");
  let section = block4.querySelector("section");
  let blockheight = block4.offsetHeight;
  let secheight = section.offsetHeight;
  let blockwidth = block4.offsetWidth;
  let secwidth = section.offsetWidth;
  let padh = blockheight - secheight;
  let padhhalf = Math.floor(padh / 2);
  let padw = blockwidth - secwidth;
  let padwhalf = Math.floor(padw / 2);
  section.style.paddingTop = padhhalf + "px";
  console.log(padhhalf);
  // section.style.paddingLeft=padwhalf+"px"
  if (padhhalf == 0) {
    section.style.paddingTop = 25 + "px";
  }
}
window.addEventListener("resize", paddding);
window.addEventListener("resize", paddding1);
// console.log(pad);

paddding();
paddding1();
let cardbox = document.querySelector("#cards");
let cards = cardbox.querySelectorAll(".card");
let action = document.querySelector(".action");
let actionless = document.querySelector(".actionless");
actionless.style.display = "none";
cards = Array.from(cards);
let selected_card = 3;
let card_selection = [];
for (let j = 0; j < cards.length; j++) {
  cards[j].style.display = "none";
}
for (let i = 0; i < selected_card; i++) {
  cards[i].style.display = "block";
}
action.addEventListener("click", () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
    cards[i].style.display = "block";
  }
  actionless.style.display = "block";
  action.style.display = "none";
});
actionless.addEventListener("click", () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
    for (let i = 0; i < selected_card; i++) {
      cards[i].style.display = "block";
    }
  }

  action.style.display = "block";
  actionless.style.display = "none";
});
