const body = document.querySelector("body");

let sat = 100;

body.style.setProperty("--saturation", sat + "%");
console.log(sat);

body.addEventListener("mousemove", detHele);

function detHele(e) {
  let mouseXPosition = e.clientX;
  console.log("mouse position x", mouseXPosition);
  let sat = (mouseXPosition / window.innerWidth) * 100;
  console.log(sat);
  console.log(sat + "%");
  body.style.setProperty("--saturation", sat + "%");
}
