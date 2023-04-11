import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const TestPage = (props) => {
  const navigate = useNavigate();
    
  const navigateToPurchase = () => {
    navigate("/");
  };
  
  const [isOpen, setIsOpen] = useState(true);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
        style={{
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
      {
        isOpen && 
        <div
          style={{
            width: isOpen ? '30%' : '0%',
            height: '100%',
            float: 'left',
            position: 'relative',
            transition: 'width 0.5s ease-in-out',
            backgroundColor: 'green',
          }}
        >
        <button style={{ marginLeft: '5px' , marginTop: '5px'}} onClick={navigateToPurchase}>뒤로가기</button>
        <h3>왼쪽 네비게이션 메뉴 테스트</h3>
        </div>
      }
      <div
        style={{
          width: isOpen ? '70%' : '100%',
          height: '100%',
          float: 'right',
          position: 'relative',
          transition: 'width 0.5s ease-in-out',
          backgroundColor: 'blue',
        }}
      >
        <button style={{ marginLeft: '1px' , marginTop: '5px'}} onClick={toggleSide}>{isOpen ? "닫기" : "열기"}</button>
        <h3>테스트 페이지 입니다.</h3>
      </div>
    </div>
  );
};


export default TestPage;