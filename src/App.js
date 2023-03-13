import React from "react";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return <BackGroundContainer>
      <Input placeholder="테마를 입력하세요"></Input>
    </BackGroundContainer>;
  }
}

const Input = styled.input`
  position: absolute;
  top: 100;
  right: 0;
  width: 190px;
  height: 30px;
  padding: 5px;
  background: transparent;
  font-size: 20px;
  color: white;
`;

const BackGroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;

export default App;