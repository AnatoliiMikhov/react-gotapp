import React, { Component } from "react";
// import "./randomChar.css";
import styled from "styled-components";

const RandomCharacterBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
`;

const RandomCharacterList = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	border-radius: 0;
`;

const RandomCharacterRandomCharacterListItem = styled.li`
	display: flex;
	justify-content: space-between;
	position: relative;
	padding: 0.75rem 1.25rem;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-width: 0 0 1px;
	&:first-child {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}
	&:last-child {
		border-bottom-width: 0;
	}
`;

const RandomCharacterTitle = styled.h4`
	margin-bottom: 20px;
	text-align: center;
`;

const Span = styled.span`
	&:first-child {
		font-weight: bold;
	}
`;

export default class RandomChar extends Component {
	render() {
		return (
			<RandomCharacterBlock className="random-block rounded">
				<RandomCharacterTitle>Random Character: John</RandomCharacterTitle>

				<RandomCharacterList>
					<RandomCharacterRandomCharacterListItem>
						<Span>Gender </Span>
						<Span>male</Span>
					</RandomCharacterRandomCharacterListItem>

					<RandomCharacterRandomCharacterListItem>
						<Span>Born </Span>
						<Span>11.03.1039</Span>
					</RandomCharacterRandomCharacterListItem>

					<RandomCharacterRandomCharacterListItem>
						<Span>Died </Span>
						<Span>13.09.1089</Span>
					</RandomCharacterRandomCharacterListItem>

					<RandomCharacterRandomCharacterListItem>
						<Span>Culture </Span>
						<Span>Anarchy</Span>
					</RandomCharacterRandomCharacterListItem>
				</RandomCharacterList>
			</RandomCharacterBlock>
		);
	}
}
