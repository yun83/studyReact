import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('https://shop-phinf.pstatic.net/20230322_168/1679463938487pAUCk_JPEG/80599773318293571_1856046953.jpg');
  background-size: cover;
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: rgba(170, 187, 255, 0.9);
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

function T02Right02() {
  return (
    <Container>
      <Content>
        <h1>테스트 페이지</h1>
        <p>This is a simple 02.</p>
      </Content>
    </Container>
  );
}

export default T02Right02;
