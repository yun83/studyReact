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
				<Link to={{ pathname: `/product/1`, state: { itemId: 1 } }} style={{ color: 'white' }}>
					<li>1번그림</li>
				</Link>
				<Link to={{ pathname: `/product/2`, state: { itemId: 2 } }} style={{ color: 'white' }}>
					<li>2번그림</li>
				</Link>
				<br/>
				<Link to={{ pathname: '/test',}} style={{ color: 'white' }}>
					<li>Go to Test Page</li>
				</Link>
			</ul>
		</div>
	);
};

export default Main;
