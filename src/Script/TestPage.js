import React from 'react';
import { useNavigate } from 'react-router-dom';


const TestPage = (props) => {
  const navigate = useNavigate();
    
  const navigateToPurchase = () => {
    navigate("/");
  };
  
  return (
    <div
        style={{
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -10,
        }}
    >
        <button onClick={navigateToPurchase}>뒤로가기</button>
        <h3>테스트 페이지 입니다.</h3>
    </div>
  );
};


export default TestPage;