/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';


const Header = () => {
	return (
		<HeaderBlock>
			<HeaderTitle>
				<a href="#">
					Game of Thrones DB
								</a>
			</HeaderTitle>
			<HeaderLinks>
				<li>
					<a href="#">Characters</a>
				</li>
				<li>
					<a href="#">Houses</a>
				</li>
				<li>
					<a href="#">Books</a>
				</li>
			</HeaderLinks>
		</HeaderBlock>
	);
};

export default Header;

/* ---------------------------- styled-component ---------------------------- */

const HeaderBlock = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 80px;
`;

const HeaderTitle = styled.h3`
		font-size: 24px;
		color: #fff;
		margin: 0;
`;

const HeaderLinks = styled.ul`
		display: flex;
		margin: 0;
		align-items: center;
		color: #fff;
		list-style-type: none;
		li {
				margin-right: 20px;
				font-size: 18px;
		}
`;