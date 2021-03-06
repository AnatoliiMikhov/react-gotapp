import React from "react";
import styled from "styled-components";
import img from "./error.jpg";


const ErrorMessage = () => {
	return (
		<>
			{/* <ErrorImage src={process.env.PUBLIC_URL + "/img/error.jpg"} alt="error"></ErrorImage> */}
			<ErrorImage src={img} />
			<ErrorText>Oops...!</ErrorText>
		</>
	);
};

export default ErrorMessage;

/* ---------------------------- styled-component ---------------------------- */

const ErrorImage = styled.img`
	max-width: 100%;
`;

const ErrorText = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	font-weight: bold;
	color: orangered;
`;