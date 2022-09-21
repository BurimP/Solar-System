let pauseButton = document.getElementById("pause");
let playButton = document.getElementById("play");

// const infoContainer = document.getElementById("info");

// async function getData() {
//   const response = await fetch("solar.json");
//   const data = await response.json();
//   console.log(data);
//   let placeholder = document.querySelector("info");
//   let out = "";
//   for (let product of data) {
//     out += `<p>${data.name}</p>`;
//   }
// }

// getData();

fetch("solar.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let placeholder = document.querySelector("info");
    let out = "";

    out += `
      <p>${planets.name}</p>
    `;

    placeholder.innerHTML = out;
  });

pauseButton.addEventListener("click", () => {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  animation.pause();
  let animatedElements = Array.from(
    document.getElementsByClassName("play-pause")
  );
  animatedElements.forEach((element) => {
    element.style.animationPlayState = "paused";
  });
});

playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  pauseButton.style.display = "block";
  animation.play();
  let animatedElements = Array.from(
    document.getElementsByClassName("play-pause")
  );
  animatedElements.forEach((element) => {
    element.style.animationPlayState = "running";
  });
});

let path = anime.path("#ellipse_svg path");

let animation = anime({
  targets: ".comet",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  duration: 70000,
  loop: true,
  rotate: "-360",
  duration: 70000,
  autoplay: true,
});

function planetName(planet) {
  console.log(planet);
}
