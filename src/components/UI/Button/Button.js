import React from "react";
import styled, { keyframes } from "styled-components";

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
    transition: transform 0.1s;
    &:hover {
      transform: scale(1.05);
    }
  `;
  return <Component onClick={onClick}>{children}</Component>;
};

export default Button;
