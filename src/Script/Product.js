import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = (props) => {

    const { ItemId } = useParams(); // const 변수명 = useParams().파라미터명;

    return (
        <div>
            <h3>{ItemId}번 상품 페이지입니다.</h3>
			<ul>
				<Link to="/"><li>메인페이지</li></Link>
            </ul>
        </div>
    );
}

export default Product;