console.log("Bismillah");
import VanillaTilt from "vanilla-tilt";
import { PopUp } from "./popup";
const popup = new PopUp();
popup.openFn();
popup.closeFn();
//Vanilla tilt implementation
const cards = document.querySelectorAll(".my-card");
cards.forEach((card) =>
  VanillaTilt.init(card, {
    scale: 1.02,
  })
);
