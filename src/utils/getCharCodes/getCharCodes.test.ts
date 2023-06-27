import { getCharCodes } from "./getCharCodes";

test("Get password char codes", () => {
  const password = getCharCodes("password-1");
  expect(password).toEqual([112, 97, 115, 115, 119, 111, 114, 100, 45, 49]);

  const emptyPassword = getCharCodes("");
  expect(emptyPassword).toEqual([]);
});
