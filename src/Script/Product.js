import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const StyledText = styled.span`
  color: blue;
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: flex;
`;

const Product = () => {
    const { ItemId } = useParams(); // const 변수명 = useParams().파라미터명;

    const imgAdd = '/img/test' + ItemId + '.png';
    const bgImgPath = `${process.env.PUBLIC_URL}/img/test${ItemId}.png`;

    return (
        <div
            style={{
                height: '100vh',
                backgroundImage: `url(${bgImgPath})`,
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
            <StyledText>글자의 색상 적용과</StyledText>
            <br />
            <span>사이즈 관련하여 테스트</span>
            <br />

            <Link to="/">뒤로가기</Link>

            <Container>
                <h3>{ItemId}번 그림 페이지입니다.</h3>
                <img
                    src={process.env.PUBLIC_URL + imgAdd}
                    alt="AI Image"
                    style={{ width: 'auto', height: '300px' }}
                />
            </Container>
        </div>
    );
};

export default Product;