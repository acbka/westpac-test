export const getCharCodes = (password: string): number[] => {
  let charCodes: number[] = [];

  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    charCodes.push(charCode);
  }

  return charCodes;
};
