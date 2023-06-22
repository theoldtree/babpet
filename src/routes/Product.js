import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import tShirt from "../assets/chimChak_T_shirt.png";
import tShirt2 from "../assets/chimChak_T_shirt2.png";
import Header from "components/Header";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const IconButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default function Product() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [tShirt, tShirt2];

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
    <div>
      <Header />
      <ProductContainer>
        <ProductImage src={images[currentImageIndex]} alt="Product Image" />
        <ButtonContainer>
          <IconButton onClick={previousImage}>
            <FiChevronLeft size={24} />
          </IconButton>
          <IconButton onClick={nextImage}>
            <FiChevronRight size={24} />
          </IconButton>
        </ButtonContainer>
        <button>구매</button>
      </ProductContainer>
    </div>
  );
}
