import { getCharCodes } from "../getCharCodes/getCharCodes";

export const validateNumber = (password: string): boolean => {
  const passwordCharCodes = getCharCodes(password);

  return passwordCharCodes.some((charCode) => charCode >= 48 && charCode <= 57);
};
