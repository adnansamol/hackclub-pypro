import React from "react";
import styled from "styled-components";

const Card = ({ children, CustomStyle }) => {
  return (
    <Component>
      <CustomStyle>{children}</CustomStyle>
    </Component>
  );
};

export default Card;
const Component = styled.div`
  * {
    border-radius: 10px;
  }
`;
