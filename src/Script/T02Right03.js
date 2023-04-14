import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('https://shop-phinf.pstatic.net/20230321_169/1679387462529O9wAs_JPEG/80523297334295057_1320636188.jpg');
  background-size: cover;
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #aaccbb;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`;

function T02Right03() {
  return (
    <Container>
      <Content>
        <h1>테스트 페이지</h1>
        <p>This is a simple 03.</p>
      </Content>
    </Container>
  );
}

export default T02Right03;
