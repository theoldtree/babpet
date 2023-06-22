import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  border: 1px solid black;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Company() {
  return (
    <div>
      <Header />
      <Section>
        <div>
          {/* 회사 이미지 */}
          <span>Living with pet 반려동물과 더불어 사는 삶</span>
        </div>
      </Section>
      <Section>
        <div>
          {/* 회사 이미지 */}
          <span>
            밥펫의 임포시블을 통한 착한 소비는 지역 자활센터 크루분들의 더 많은
            일자리를 만들어 왔습니다.
          </span>
        </div>
        <RowDiv>
          <Section>
            <span>지역자활일자리 창출</span>
          </Section>
          <Section>
            <span>환경을 생각하는 기업</span>
          </Section>
        </RowDiv>
      </Section>
      <Section>
        <span>5년 여간 지속해온 반려동물 수제 간식 전문기업으로 성장 중</span>
        <ul>
          <li>100여개의 레시피 테스트 완료</li>
          <li>사람이 먹는 재료 그대로</li>
          <li>원재료 구매부터 생산까지 직접하여, 거품 없는 가격!</li>
        </ul>
      </Section>
      <Section>
        <div>
          <h1>임포시블이란?</h1>
          <span>
            임포시블은 I'm possible 로 "나는 가능하다" 라는 의미를 가지고
            있습니다. Paw는 강아지 발바닥을 의미 합니다. 좋은 제품은 당연하고
            비반려인과 반려인 모두가 행복한 세상을 꿈꾸는 브랜드 입니다.
          </span>
        </div>
        <RowDiv>
          <Section>
            <span>전국지역자활센터</span>
            <span>
              원물 구매,제조,품질관리,지역 자활센터 크루분들과 함께 합니다.
            </span>
          </Section>
          <Section>
            <span>밥펫</span>
            <span>지역자활센터 교육 및 레시피 및 제품 공정 전달</span>
          </Section>
          <Section>
            <span>공동브랜드-임포시블</span>
            <span>지역자활센터 공장에서 생산되는 제품의 공동 브랜드</span>
          </Section>
        </RowDiv>
      </Section>
      <Section>
        <h1>임포시블 제조과정 및 제품을 소개합니다.</h1>
        <div>
          <span>
            10여가지 원재료를 최상의 배합으로 오픈베이킹 1차 작업 후 2차
            열풍건조로 완전 건조시킨 큐브형 영양간식, 노즈워킹용이나
            훈련보상용으로 최적화된 간식.
          </span>
        </div>
        <div>
          <span>
            원재료 100% 활용한 천연껌류 간식, 단순히 먹는 즐거움 뿐만이 아니라
            오랜시간 가지고 놀면서 정서적 안정감을 줄 수 있는 간식
          </span>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
