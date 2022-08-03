export const animate = ({
  ctx,
  canvasWidth,
  canvasHeight,
  spriteHeight,
  spriteWidth,
  gameFrame,
  staggerFrames,
  image,
  animationFrames,
}: {
  ctx: CanvasRenderingContext2D | null;
  canvasWidth: number;
  canvasHeight: number;
  spriteWidth: number;
  spriteHeight: number;
  gameFrame: number;
  staggerFrames: number;
  image: HTMLImageElement;
  animationFrames: { loc: { x: number; y: number }[] };
}): void => {
  ctx?.clearRect(0, 0, canvasWidth, canvasHeight);

  let position = Math.floor(gameFrame/staggerFrames) % animationFrames.loc.length;

  let currentFrameX = animationFrames.loc[0].x;
  let currentFrameY = animationFrames.loc[0].y;

  currentFrameX = spriteWidth * position;

  ctx?.drawImage(
    image,
    currentFrameX,
    currentFrameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;
  requestAnimationFrame(() =>
    animate({
      ctx,
      canvasWidth,
      canvasHeight,
      spriteHeight,
      spriteWidth,
      gameFrame,
      staggerFrames,
      image,
      animationFrames,
    })
  );
};