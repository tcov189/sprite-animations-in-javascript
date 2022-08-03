export const spriteFrameMapper = (
  animationState: { name: string; frames: number }[],
  spriteWidth: number,
  spriteHeight: number
) => {
  let spriteAnimations: {
    [key: string]: { loc: { x: number; y: number }[] };
  } = {};

  animationState.forEach((state, index) => {
    let frames: { loc: { x: number; y: number }[] } = {
      loc: [],
    };

    for (let j = 0; j < state.frames; j++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;

      frames.loc.push({ x: positionX, y: positionY });
    }

    spriteAnimations[state.name] = frames;
  });

  return spriteAnimations;
};
