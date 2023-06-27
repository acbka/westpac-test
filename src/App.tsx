import React, { useState } from "react";
import styled from "styled-components";
import { validateNumber } from "./utils/validateNumber/validateNumber";
import { validateSpecialChars } from "./utils/validateSpecialChars/validateSpecialChars";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 8px;
  margin: 8px 0 32px 0;
`;

const StyledButton = styled.button`
  padding: 8px 0;
  width: 100%;
`;

function App() {
  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValid(validatePassword(newPassword));
  };

  const validatePassword = (password: string): boolean => {
    if (password.length < 8) {
      return false;
    }
    if (password.length > 15) {
      return true;
    }
    return validateNumber(password) && validateSpecialChars(password);
  };

  const handleResetClick = () => {
    setShowMessage(true);
    return;
  };

  return (
    <Layout>
      {showMessage ? (
        <h2>Password reset successful!</h2>
      ) : (
        <>
          <h2>Password Reset</h2>
          <Form>
            <label htmlFor="password">Password</label>
            <StyledInput
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
            />
            <StyledButton onClick={handleResetClick} disabled={!isValid}>
              Reset Password
            </StyledButton>
          </Form>
        </>
      )}
    </Layout>
  );
}

export default App;
