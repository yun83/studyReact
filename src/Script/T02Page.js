import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';

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
        <button style={{ marginLeft: '5px' , marginTop: '5px'}} onClick={navigateToPurchase}>뒤로가기</button>
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
          <h2>오른쪽 01</h2>
        ) : selectedMenu === 2 ? (
          <h2>오른쪽 02</h2>
        ) : selectedMenu === 3 ? (
          <h2>오른쪽 03</h2>
        ) : null
      }
      </div>

    </div>
  );
};

export default T02Page;