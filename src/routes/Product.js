import React, { useState } from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #f50057;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

export default function Product() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "../assets/chimChak_T_shirt.jpg",
    "path_to_image2.jpg",
    "path_to_image3.jpg",
  ];

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ProductContainer>
      <div>product</div>
      <ProductImage src={images[currentImageIndex]} alt="Product Image" />
      <ButtonContainer>
        <Button onClick={previousImage}>이전</Button>
        <Button onClick={nextImage}>다음</Button>
      </ButtonContainer>
    </ProductContainer>
  );
}
