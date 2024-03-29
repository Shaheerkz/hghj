import React from "react";
import {
  Author,
  CardImage,
  CardWrapper,
  Description,
  Price,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();
  return (
    <CardWrapper
      onClick={() => {
        navigate("/course/1");
      }}
    >
      <Wrapper>
        <CardImage
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="NFT"
        />
        <h2>ALgebra</h2>
        <Description>Description</Description>
        <Price>
          <p>$ 55</p>
        </Price>
        <hr />
        <Author>
          <p>Teacher Name</p>
        </Author>
      </Wrapper>
    </CardWrapper>
  );
};

export default Card;
