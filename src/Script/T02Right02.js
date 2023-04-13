import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url('https://tomntoms.com/upload/sns/3717365327_a07kGqTS_20230411112938.jpg');
  background-size: cover;
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: #aabbff;
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
