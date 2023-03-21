import React from 'react';
import { useNavigate } from 'react-router-dom';


const TestPage = (props) => {
  const navigate = useNavigate();
    
  const navigateToPurchase = () => {
    navigate("/");
  };
  
  return (
    <div>
        <button onClick={navigateToPurchase}>뒤로가기</button>
        <h3>테스트 페이지 입니다.</h3>
    </div>
  );
};


export default TestPage;