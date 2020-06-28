import React, {Component} from "react";
import gotService from "../../services/gotServices";
import Spinner from "../spinner";
// import './itemList.css';
import styled from "styled-components";

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
export default class ItemList extends Component {
    gotService = new gotService();

    state = {
        characterList: null,
    };

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((characterList) => {
                this.setState({
                    characterList,
                });
            });
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <ListItem
                    key={i}
                    onClick={() => this.props.onCharSelected(41 + i)}
                >
                    {item.name}
                </ListItem>
            )
        })
    }

    render() {

        const {characterList} = this.state;

        if (!characterList) {
            return <Spinner />
        }

        const items = this.renderItems(characterList);

        return (
            <List>
                {items}
            </List>
        );
    }
}
