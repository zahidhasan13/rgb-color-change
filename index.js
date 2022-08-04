window.onload = () => {
    main();
}

function main() {
  const bodyColorChange = document.querySelector("#container");
  const colorChangeBtn = document.querySelector("#btn");

  colorChangeBtn.addEventListener("click", function () {
    const bgColor = rgbColor();
    bodyColorChange.style.backgroundColor = bgColor;
  });
}

const rgbColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
};
