import React from "react";
import styled from "styled-components";

const StyledNewButton = styled.button`
  padding: 20px;
  background: #1099eb;
  color: white;
  border: none;
  font-family: Roboto, sans-serif;
  text-transform: uppercase;
  display: flex;
  span {
    margin-right: 16px;
  }

  &:hover {
    background: #1a6b9b;
  }
`;

const NewButton = ({ children }) => {
  return (
    <StyledNewButton>
      <span>{children}</span>
      <span>===></span>
    </StyledNewButton>
  );
};

export default NewButton;
