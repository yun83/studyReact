import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
	
    <div
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        backgroundSize: 'cover',
        backgroundImage: `url("https://tomntoms.com/assets/images/sub/sv_1.jpg")`,
      }}
    >
	<button style={{ marginLeft: '5px', marginTop: '5px' }} onClick={toggleSide}>setIsOpen</button><br />
	  {
		isOpen && 
		<div>
			<h3>setIsOpen = {isOpen ? "트루" : "펄스"}</h3>
		</div>
	  }
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      
      <ul>
        <Link to={{ pathname: `/product/1`, state: { itemId: 1 } }} style={{ color: 'white' }}>
          <li>1번그림</li>
        </Link>
        <Link to={{ pathname: `/product/2`, state: { itemId: 2 } }} style={{ color: 'white' }}>
          <li>2번그림</li>
        </Link>
        <br />
        <Link to={{ pathname: '/test' }} style={{ color: 'white' }}>
          <li>Go to Test Page</li>
        </Link>
        <Link to={{ pathname: '/T02' }} style={{ color: 'white' }}>
          <li>Go to Test 02 Page</li>
        </Link>
        
        <br />
        <Link to={{ pathname: '/PlayTom' }} style={{ color: 'white' }}>
          <li>Unity Web GL Add Test</li>
        </Link>
      </ul>
    </div>
  );
};

export default Main;
