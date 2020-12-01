import React, {Component} from "react";
import PropTypes from 'prop-types';
import gotService from "../../services/gotServices";
import Spinner from "../spinner";
import ErrorMessage from "../error";
import styled from "styled-components";

export default class ItemList extends Component {

	gotService = new gotService();

	state = {
		characterList: null,
		error: false,
	};

	componentDidMount() {
		this.gotService
			.getAllCharacters()
			.then((characterList) => {
				this.setState({
					characterList,
					error: false,
				});
			})
			.catch((e) => {
				this.onError(e);
			});
	}

	componentDidCatch() {
		this.setState({
			charList: null,
			error: true,
		});
	}

	onError(status) {
		this.setState({
			charList: null,
			error: true,
		});
	}

	renderItems(arr) {
		return arr.map((item) => {
			// console.log(item);
			const {id, name} = item;
			return (
				<ListItem
					key={id}
					onClick={() => this.props.onCharSelected(id)}>
					{name}
				</ListItem>
			);
		});
	}

	render() {
		const {characterList, error} = this.state;

		if (error) {
			return <ErrorMessage />
		}

		if (!characterList) {
			return <Spinner />;
		}

		const items = this.renderItems(characterList);

		return <List>{items}</List>;
	}
}

/* ---------------------------- styled-component ---------------------------- */

const List = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 50px;
	border-radius: 0.25rem;
`;

const ListItem = styled.li`
	position: relative;
	display: block;
	padding: 0.75rem 1.25rem;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
	cursor: pointer;
	&:first-child {
		border-top-right-radius: inherit;
		border-top-left-radius: inherit;
	}
	&:last-child {
		border-bottom-right-radius: inherit;
		border-bottom-left-radius: inherit;
	}
`;


/* ------------------------------- Check Type ------------------------------- */
ItemList.propTypes = {
	onCharSelected: PropTypes.func
}