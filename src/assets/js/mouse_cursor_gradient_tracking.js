function eventGradientTracking(document) {
  let buttons = document.querySelectorAll(".mouse-cursor-gradient-tracking");
  buttons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      let rect = button.getBoundingClientRect();
      // @ts-ignore
      let x = e.clientX - rect.left;
      // @ts-ignore
      let y = e.clientY - rect.top;
      // @ts-ignore
      button.style.setProperty("--x", x + "px");
      // @ts-ignore
      button.style.setProperty("--y", y + "px");
    });
  });
}

export default eventGradientTracking;
