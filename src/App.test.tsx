import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("page is rendered with all details", () => {
  render(<App />);

  const title = screen.getByText("Password Reset");
  expect(title).toBeInTheDocument();

  const passwordInput = screen.getByLabelText("Password");
  expect(passwordInput).toBeInTheDocument();

  const resetButton = screen.getByRole("button", { name: "Reset Password" });
  expect(resetButton).toBeDisabled();

  const successMessage = screen.queryByText("Password reset successful!");
  expect(successMessage).not.toBeInTheDocument();
});

test("button disabled if the password has less than 8 characters", async () => {
  render(<App />);

  const passwordInput = screen.getByLabelText("Password");
  await userEvent.type(passwordInput, "1234567");

  const resetButton = screen.getByRole("button", { name: "Reset Password" });
  expect(resetButton).toBeDisabled();
});

test("button enabled if password is greater than 15 characters", async () => {
  render(<App />);

  const passwordInput = screen.getByLabelText("Password");
  await userEvent.type(passwordInput, "anesthesiologist");

  const resetButton = screen.getByRole("button", { name: "Reset Password" });
  expect(resetButton).toBeEnabled();
});

test("suceess message is rendered if button is clicked", async () => {
  render(<App />);

  const passwordInput = screen.getByLabelText("Password");
  await userEvent.type(passwordInput, "World-23!");

  const resetButton = screen.getByRole("button", { name: "Reset Password" });
  expect(resetButton).toBeEnabled();
  userEvent.click(resetButton);

  const successMessage = await screen.findByText("Password reset successful!");
  expect(successMessage).toBeInTheDocument();
});
