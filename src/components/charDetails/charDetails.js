import React, {Component} from 'react';
// import './charDetails.css';
import styled from "styled-components";

const CharDetailsBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
	border-radius: 0.25rem;
`;

const CharDetailsTitle = styled.h4`
	margin-bottom: 20px;
	text-align: center;
`;

const CharDetailsList = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	border-radius: 0;
`;

const CharDetailsListItem = styled.li`
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
export default class CharDetails extends Component {
    render() {
        return (
            <CharDetailsBlock>
                <CharDetailsTitle>John Snow</CharDetailsTitle>

                <CharDetailsList>

                    <CharDetailsListItem>
                        <span className="term">Gender</span>
                        <span>male</span>
                    </CharDetailsListItem>

                    <CharDetailsListItem>
                        <span className="term">Born</span>
                        <span>1783</span>
                    </CharDetailsListItem>

                    <CharDetailsListItem>
                        <span className="term">Died</span>
                        <span>1820</span>
                    </CharDetailsListItem>

                    <CharDetailsListItem>
                        <span className="term">Culture</span>
                        <span>First</span>
                    </CharDetailsListItem>

                </CharDetailsList>
            </CharDetailsBlock>
        );
    }
}
