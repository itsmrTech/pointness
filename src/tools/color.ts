import randomcolor from 'randomcolor';
import { invert, adjustHue } from 'polished';
export const genRandomColor = () => {
  let baseColor = randomcolor();
  let secondColor = adjustHue(180, baseColor);
  return [baseColor, secondColor] as [string, string];
};
export const splitColor = (colorRange, splitCount) => {
  let allColors = new Array(0);
  let prevColor = colorRange[0];
  for (var i = 1; i <= splitCount; i++) {
    let splitColor = adjustHue((180 / (splitCount + 1)) * i, prevColor);
    allColors.push([prevColor, splitColor]);
    prevColor = splitColor;
  }
  return allColors;
};
