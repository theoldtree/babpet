import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <span>(주)밥펫 대표이사 김시현</span>
      <span>제품 문의: 한태희 팀장(010-7701-5909)</span>
      <span>대전 광역시 유성구 장대로 51 2층</span>
      <span>전화번호: 042-719-7798</span>
      <span>이메일 : bqbpet@naver.com</span>
      <span>통신판매업 : 2019-대전유성-0053</span>
    </FooterDiv>
  );
}
