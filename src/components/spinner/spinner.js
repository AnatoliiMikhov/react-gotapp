import React from "react";
import styled, {keyframes} from "styled-components";

const Spinner = () => {
	return (
		<WrapperSpinnerBlock>
			<InnerSpinnerBlock>
				<div></div>
			</InnerSpinnerBlock>
		</WrapperSpinnerBlock>
	);
};

export default Spinner;

/* ---------------------------- styled-component ---------------------------- */

const spinnerAnimation = keyframes`
	0% {transform: rotate(0deg)}
	50% {transform: rotate(180deg)}
	100% {transform: rotate(360deg)}
`;

const WrapperSpinnerBlock = styled.div`
	width: 200px;
	height: 200px;
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	margin: 0 auto;
	overflow: hidden;
	background: none;
`;

const InnerSpinnerBlock = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	div {
		position: absolute;
		animation: ${spinnerAnimation} 1.5s linear infinite;
		width: 84px;
		height: 84px;
		top: 40%;
		left: 28%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		box-shadow: 0 2px 0 0 rgb(22, 183, 223);
		box-sizing: content-box;
	}
`;