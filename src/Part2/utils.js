export const randomNumBetween = (min, max) => {
  return Math.random() * (max - min) + min;
}

export const hypotenuse = (a, b) => {
  return Math.sqrt(a * a + b * b);
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return (result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null);
}