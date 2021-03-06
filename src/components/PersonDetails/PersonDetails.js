import React, {Component} from 'react';
import PropTypes from 'prop-types';
import gotService from "../../services/gotServices";
import ErrorMessage from "../error";
import Spinner from "../spinner";
import styled from "styled-components";

export default class PersonDetails extends Component {

	gotService = new gotService();

	state = {
		character: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		this.updateCharacter();
	}

	componentDidUpdate(prevProps) {
		if (this.props.characterId !== prevProps.characterId) {
			this.updateCharacter();
		}
	}

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}

	onCharDetailLoaded = (character) => {
		this.setState({
			character,
			loading: false
		});
	}

	updateCharacter() {
		const {characterId} = this.props;
		if (!characterId) {
			return;
		}

		this.setState({
			loading: true
		});

		this.gotService
			.getCharacter(characterId)
			.then(this.onCharDetailLoaded)
			.catch(() => this.onError());
	}

	onError() {
		this.setState({
			character: null,
			error: true
		})
	}

	render() {

		if (!this.state.character && this.state.error) {
			return <ErrorMessage />
		} else if (!this.state.character) {
			return <Error>Please select a character</Error>
		}

		const {name, gender, born, died, culture} = this.state.character;

		if (this.state.loading) {
			return (
				<PersonDetailsBlock>
					<PersonDetailsTitle>{name}</PersonDetailsTitle>

					<PersonDetailsList>

						<PersonDetailsListItem>
							<Span>Gender</Span>
							<Span>{gender}</Span>
						</PersonDetailsListItem>

						<PersonDetailsListItem>
							<Span>Born</Span>
							<Span>{born}</Span>
						</PersonDetailsListItem>

						<PersonDetailsListItem>
							<Span>Died</Span>
							<Span>{died}</Span>
						</PersonDetailsListItem>

						<PersonDetailsListItem>
							<Span>Culture</Span>
							<Span>{culture}</Span>
						</PersonDetailsListItem>

					</PersonDetailsList>
					<Spinner />
				</PersonDetailsBlock>
			);
		}

		return (
			<PersonDetailsBlock>
				<PersonDetailsTitle>{name}</PersonDetailsTitle>

				<PersonDetailsList>

					<PersonDetailsListItem>
						<Span>Gender</Span>
						<Span>{gender}</Span>
					</PersonDetailsListItem>

					<PersonDetailsListItem>
						<Span>Born</Span>
						<Span>{born}</Span>
					</PersonDetailsListItem>

					<PersonDetailsListItem>
						<Span>Died</Span>
						<Span>{died}</Span>
					</PersonDetailsListItem>

					<PersonDetailsListItem>
						<Span>Culture</Span>
						<Span>{culture}</Span>
					</PersonDetailsListItem>

				</PersonDetailsList>
			</PersonDetailsBlock>
		);
	}
}

/* ---------------------------- styled-component ---------------------------- */

const PersonDetailsBlock = styled.div`
	position: relative;
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
	border-radius: 0.25rem;
`;

const PersonDetailsTitle = styled.h4`
	margin-bottom: 20px;
	text-align: center;
`;

const PersonDetailsList = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	border-radius: 0;
`;

const PersonDetailsListItem = styled.li`
	display: flex;
	position: relative;
	padding: 0.75rem 1.25rem;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-width: 0 0 1px;
	justify-content: space-between;
	cursor: pointer;
	&:first-child {
		border-top-left-radius: inherit;
		border-top-right-radius: inherit;
	}
	&:last-child {
		border-bottom-width: 0;
		}
`;

const Span = styled.span`
	&:first-child {
		font-weight: bold;
	}
`;

const Error = styled.span`
	color: #fff;
		text-align: center;
		font-size: 26px;
`;


/* ------------------------------- Check Types ------------------------------ */

PersonDetails.propTypes = {
	characterId: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};