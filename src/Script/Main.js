import React from 'react';
import { Link } from 'react-router-dom';

// props 인자 추가
const Main = (props) => {

	return (
		<div
			style={{
				backgroundImage: `url("https://tomntoms.com/assets/images/sub/sv_1.jpg")`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				position: "fixed",
			}}
			>

			<h3>안녕하세요. 메인페이지 입니다.</h3>

			<ul>
				<Link to="/product/1" style={{ color: 'white' }}><li>1번상품</li></Link>
				<Link to="/product/2" style={{ color: 'white' }}><li>2번상품</li></Link>
			</ul>
		</div>
	);
};

export default Main;
