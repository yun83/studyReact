import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = (props) => {

    const { ItemId } = useParams(); // const 변수명 = useParams().파라미터명;

    return (
        <div>
        <Link to="/">뒤로가기</Link>
        <h3>{ItemId}번 상품 페이지입니다.</h3>
        </div>
    );
}

export default Product;