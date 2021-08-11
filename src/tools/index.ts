export const rand = (max, min = 0) => {
  let num = Math.floor(Math.random() * max) + min;
  console.log(num, max, min);
  return num;
};
