import { validateNumber } from "./validateNumber";

test("Validate number", () => {
  const passwordWithNumber = validateNumber("password-1");
  expect(passwordWithNumber).toBeTruthy();

  const passwordWithoutNumber = validateNumber("password");
  expect(passwordWithoutNumber).toBeFalsy();

  const passwordWithTwoNumbers = validateNumber("a1b2c3d4e");
  expect(passwordWithTwoNumbers).toBeTruthy();
});
