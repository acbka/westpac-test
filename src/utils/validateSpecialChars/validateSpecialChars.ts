import { getCharCodes } from "../getCharCodes/getCharCodes";

export const validateSpecialChars = (password: string): boolean => {
  const passwordCharCodes = getCharCodes(password);

  return (
    passwordCharCodes.filter(
      (charCode) =>
        (charCode >= 32 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
    ).length >= 2
  );
};
