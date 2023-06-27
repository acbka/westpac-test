import { validateSpecialChars } from "./validateSpecialChars";

test("Validate special char codes", () => {
  const passwordWithOneSpecialChar = validateSpecialChars("0273333-33");
  expect(passwordWithOneSpecialChar).toBeFalsy();

  const passwordWithoutOneSpecialChars = validateSpecialChars("027333333");
  expect(passwordWithoutOneSpecialChars).toBeFalsy();

  const passwordWithTwoSpecialChars = validateSpecialChars("0273333-33!");
  expect(passwordWithTwoSpecialChars).toBeTruthy();
});
