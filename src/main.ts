import { animate } from "./utils/helpers";
import { spriteFrameMapper } from "./utils/spriteFrameMapper";
import imageUrl from "./images/shadow_dog.png";

const canvas = document.getElementById("canvas1") as HTMLCanvasElement | null;

if (!canvas) {
  alert("Can't find canvas with id of canvas1");
} else {
  const ctx = canvas.getContext("2d");

  const canvasWidth = 600;
  const canvasHeight = 600;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const playerImage = new Image();
  playerImage.src = imageUrl;

  const spriteWidth = 575;
  const spriteHeight = 523;

  let gameFrame = 0;
  const staggerFrames = 5;

  const animationState = [
    {
      name: "idle",
      frames: 7,
    },
    {
      name: "jump",
      frames: 7,
    },
    {
      name: "fall",
      frames: 7,
    },
    {
      name: "run",
      frames: 9,
    },
    {
      name: "dizzy",
      frames: 11,
    },
    {
      name: "sit",
      frames: 5,
    },
    {
      name: "roll",
      frames: 7,
    },
    {
      name: "bite",
      frames: 7,
    },
    {
      name: "ko",
      frames: 12,
    },
    {
      name: "getHit",
      frames: 4,
    },
  ];

  const spriteAnimations = spriteFrameMapper(animationState, spriteWidth, spriteHeight);

  const select = document.querySelector<HTMLSelectElement>("#animation");

  animationState.forEach((state) => {
    select?.insertAdjacentHTML(
      "afterbegin",
      `<option value=${state.name}>${state.name}</option>`
    );
  });

  let playerState = "idle";

  playerImage.onload = () => {
    animate({
      ctx,
      image: playerImage,
      canvasWidth,
      canvasHeight,
      spriteHeight,
      spriteWidth,
      gameFrame,
      staggerFrames,
      animationFrames: spriteAnimations[playerState],
    });
  };

  if (select) {
    select.addEventListener("change", (event) => {
      const selectedAnimation = event.target as HTMLSelectElement;

      animate({
        ctx,
        image: playerImage,
        canvasWidth,
        canvasHeight,
        spriteHeight,
        spriteWidth,
        gameFrame,
        staggerFrames,
        animationFrames: spriteAnimations[selectedAnimation.value],
      });
    });
  }
}

export {};
