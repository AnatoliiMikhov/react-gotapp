import React, {Component} from 'react';
// import './PersonDetails.css';
import styled from "styled-components";

const PersonDetailsBlock = styled.div`
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
export default class PersonDetails extends Component {
	render() {
		return (
			<PersonDetailsBlock>
				<PersonDetailsTitle>John Snow</PersonDetailsTitle>

				<PersonDetailsList>

					<PersonDetailsListItem>
						<Span>Gender</Span>
						<Span>male</Span>
					</PersonDetailsListItem>

					<PersonDetailsListItem>
						<Span>Born</Span>
						<Span>1783</Span>
					</PersonDetailsListItem>

					<PersonDetailsListItem>
						<Span>Died</Span>
						<Span>1820</Span>
					</PersonDetailsListItem>

					<PersonDetailsListItem>
						<Span>Culture</Span>
						<Span>First</Span>
					</PersonDetailsListItem>

				</PersonDetailsList>
			</PersonDetailsBlock>
		);
	}
}
