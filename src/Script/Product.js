import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const StyledText = styled.span`
color: blue;
font-size: 1.5rem;
`;

const Product = (props) => {

    const { ItemId } = useParams(); // const 변수명 = useParams().파라미터명;

    return (
        <div style={{
            height: "100vh",
            backgroundImage: `url("https://img.freepik.com/free-vector/watercolor-oil-painting-background_52683-107025.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -10,
        }}>

            <StyledText>글자의 색상 적용과</StyledText><br />
            <span>사이즈 관련하여 테스트</span><br />

            <Link to="/">뒤로가기</Link>

            <h3>{ItemId}번 상품 페이지입니다.</h3>
        </div>
    );
}

export default Product;