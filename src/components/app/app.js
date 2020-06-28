import React, {Component} from "react";
import {Col, Row, Container} from "reactstrap";
import styled from "styled-components";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage";
import ErrorMessage from "../error";

const ButtonToggle = styled.button`
	padding: 12px;
	background-color: #1e2edb;
	border: none;
	border-radius: 4px;
	color: #fff;
	margin-bottom: 40px;
	outline: none;
	box-shadow: 0px 0px 30px rgba(256, 256, 256, 0.1);
	cursor: pointer;
	&:focus {
		outline: none;
	}
`;

export default class App extends Component {
	state = {
		showRandomChar: true,
		error: false,
	};

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}

	toggleRandomChar = () => {
		this.setState((state) => {
			return {
				showRandomChar: !state.showRandomChar,
			};
		});
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		const character = this.state.showRandomChar ? <RandomChar /> : null;
		return (
			<React.Fragment>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{size: 6, offset: 0}}>
							{character}
							<ButtonToggle onClick={this.toggleRandomChar}>
								Toggle random character
							</ButtonToggle>
						</Col>
					</Row>
					<CharacterPage />
				</Container>
			</React.Fragment>
		);
	}
}
