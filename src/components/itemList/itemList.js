import React, {Component} from 'react';
// import './itemList.css';
import styled from "styled-components";

const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
`;

const ListItem = styled.li`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
    &:first-child{
        border-top-right-radius: inherit;
        border-top-left-radius: inherit;
    }
    &:last-child{
        border-bottom-right-radius: inherit;
        border-bottom-left-radius: inherit;
    }
`;
export default class ItemList extends Component {

    render() {
        return (
            <List>
                <ListItem>
                    John Snow
                </ListItem>
                <ListItem>
                    Brandon Stark
                </ListItem>
                <ListItem>
                    Geremy
                </ListItem>
            </List>
        );
    }
}