const hero = document.querySelector(".text-container");
const text = document.querySelector("h1");
const walk = 1000; // 1000px

hero.addEventListener("mousemove", function (event) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  x += event.target.offsetLeft;
  y += event.target.offsetTop;

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(238, 82, 83, 0.7),
        ${-1 * xWalk}px ${yWalk}px 0 rgba(52, 31, 151, 0.7),
        ${yWalk}px ${-1 * xWalk}px 0 rgba(243, 104, 224, 0.7),
        ${-1 * yWalk}px ${xWalk}px 0 rgba(254, 202, 87, 0.7)
    `;
});
