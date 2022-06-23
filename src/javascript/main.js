console.log("Bismillah");
import VanillaTilt from "vanilla-tilt";
const cards = document.querySelectorAll(".my-card");
cards.forEach((card) =>
  VanillaTilt.init(card, {
    scale: 1.02,
  })
);
