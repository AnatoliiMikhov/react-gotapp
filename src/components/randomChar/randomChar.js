import React, {Component} from "react";
// import "./randomChar.css";
import styled from "styled-components";
import gotService from "../../services/gotServices";
import Spinner from "../spinner";
import ErrorMessage from "../error";

export default class RandomChar extends Component {

    gotService = new gotService();

    state = {
        character: {},
        loading: true,
        error: false
    }

    /* ------------------------- методы жизненого цикла ------------------------- */

    componentDidMount() {
        this.updateCharacter();
        this.timerId = setInterval(this.updateCharacter, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    /* --------------------------------- methods -------------------------------- */

    onCharacterLoaded = (character) => {
        this.setState({
            character,
            loading: false,
        });
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        });
        clearInterval(this.timerId);
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random() * 100 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    }

    /* --------------------------------- Render --------------------------------- */

    render() {
        const {character, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <SpinnerBlock /> : null;
        const content = !(loading || error) ? <View character={character} /> : null;

        return (
            <RandomCharacterBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomCharacterBlock>
        );
    }
}


/* ---------------------------------- View ---------------------------------- */

const View = ({character}) => {
    const {name, gender, born, died, culture} = character;
    return (
        <>
            <RandomCharacterBlock>
                <RandomCharacterTitle>Random Character: {name}</RandomCharacterTitle>

                <RandomCharacterList>
                    <RandomCharacterListItem>
                        <Span>Gender </Span>
                        <Span>{gender}</Span>
                    </RandomCharacterListItem>

                    <RandomCharacterListItem>
                        <Span>Born </Span>
                        <Span>{born}</Span>
                    </RandomCharacterListItem>

                    <RandomCharacterListItem>
                        <Span>Died </Span>
                        <Span>{died}</Span>
                    </RandomCharacterListItem>

                    <RandomCharacterListItem>
                        <Span>Culture </Span>
                        <Span>{culture}</Span>
                    </RandomCharacterListItem>
                </RandomCharacterList>
            </RandomCharacterBlock>
        </>
    )
}

const SpinnerBlock = () => {
    return (
        <>
            <RandomCharacterBlock>
                <RandomCharacterTitle>Random Character: </RandomCharacterTitle>

                <RandomCharacterList>
                    <RandomCharacterListItem>
                        <Span>Gender </Span>
                    </RandomCharacterListItem>

                    <RandomCharacterListItem>
                        <Span>Born </Span>
                    </RandomCharacterListItem>
                    <RandomCharacterListItem>
                        <Span>Died </Span>
                    </RandomCharacterListItem>

                    <RandomCharacterListItem>
                        <Span>Culture </Span>
                    </RandomCharacterListItem>
                </RandomCharacterList>
                <Spinner />
            </RandomCharacterBlock>
        </>
    );
}

/* ---------------------------- styled-component ---------------------------- */

const RandomCharacterBlock = styled.div`
    position: relative;
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

const RandomCharacterListItem = styled.li`
	display: flex;
	justify-content: space-between;
	position: relative;
	padding: 0.75rem 1.25rem;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
    border-width: 0 0 1px;
    cursor: pointer;
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
