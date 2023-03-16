import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const SideBar = () => {
    return (
        <div>
            <h3>사이드 바</h3>
            <Container>
                <Link to="/" style={{ color: 'green' }}>메인화면</Link>
            </Container>
            <Container>
                <Link to="/product/1" style={{ color: 'red' }}>1번상품</Link>
            </Container>
            <Container>
                <Link to="/product/2" style={{ color: 'blue' }}>2번상품</Link>
            </Container>
        </div>
    );
};

export default SideBar;
