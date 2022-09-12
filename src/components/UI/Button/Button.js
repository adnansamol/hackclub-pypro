import React from "react";
import styled from "styled-components";

const Button = ({ children, color, bgColor, size, onClick }) => {
  const Component = styled.button`
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: fit-content;
    border: none;
    padding: 8px;
    background: ${bgColor};
    font-size: ${size};
    text-transform: uppercase;
    font-weight: 600;
    color: ${color};
    cursor: pointer;
  `;
  return <Component onClick={onClick}>{children}</Component>;
};

export default Button;
