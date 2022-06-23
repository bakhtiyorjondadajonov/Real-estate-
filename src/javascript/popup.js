export class PopUp {
  constructor() {
    this.navBar = document.querySelector(".nav_bar");
    this.popMenu = document.querySelector(".pop-up");
    this.closeBtn = document.querySelector(".close");
    this.navBar.addEventListener("click", this.openFn.bind(this));

    this.closeBtn.addEventListener("click", this.closeFn.bind(this));
  }
  closeFn() {
    this.popMenu.classList.add("hidden");
  }
  openFn() {
    this.popMenu.classList.remove("hidden");
  }
}
