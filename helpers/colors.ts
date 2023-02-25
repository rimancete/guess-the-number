
type HEX = `#${string}`;

interface ColorType {
    [key: string]: HEX;
  }
const Colors: ColorType = {
  primary500: "#72063c",
  primary600: "#640233",
  primary700: "#4e0329",
  primary900: "#3b021f",

  secondary500: "#ddb52f",
};

export default Colors;
