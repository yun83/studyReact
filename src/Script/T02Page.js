import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import T02Right01 from './T02Right01'
import T02Right02 from './T02Right02'
import T02Right03 from './T02Right03'

const StyledButton = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

const T02Page = (props) => {
  const [selectedMenu, setSelectedMenu] = useState(1);
  const navigate = useNavigate();
    
  const menus = [
    { id: 1, title: 'Test Menu 1' },
    { id: 2, title: 'Test Menu 2' },
    { id: 3, title: 'Test Menu 3' },
  ];

  const navigateToPurchase = () => {
    navigate("/");
  };

  const handleClick = (menuId) => {
    setSelectedMenu(menuId);
  };

  return (
    <div style={{ 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%', 
      }}>

      <div style={{ 
        width: '20%',
        height: '100%',
        float: 'left',
        transition: 'width 0.5s ease-in-out',
        backgroundColor: 'blue',
        }}>
        <StyledButton  style={{ marginLeft: '5px' , marginTop: '5px' }} onClick={navigateToPurchase}>뒤로가기</StyledButton >
        <h1>왼쪽 페이지</h1>
        
        {
          menus.map((menu) => (
            <div
              key={menu.id}
              onClick={() => handleClick(menu.id)}
            >
              {
                selectedMenu === menu.id ? (
                  <h2>{menu.title}</h2>
                ) : (
                  <h3>{menu.title}</h3>
                )
              }
            </div>
          ))
        }
      </div>
        
      <div>
      {
        selectedMenu === 1 ? (
          <T02Right01/>
        ) : selectedMenu === 2 ? (
          <T02Right02/>
        ) : selectedMenu === 3 ? (
          <T02Right03/>
        ) : null
      }
      </div>

    </div>
  );
};

export default T02Page;