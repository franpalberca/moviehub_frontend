import styled from 'styled-components';

export const ProfileComponentStyles = styled.div`
    .user__info {
        display: grid;
        grid-template-columns: 130vh auto;
        & .card__profile {
            border: 1px solid black;
            border-radius: 25px;
            width: 70vh;
            height: 70vh;
            display: flex;
            flex-direction: column;
            position: relative;
            left: 15%;
            top: 15px;
            & h1 {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            & img {
                width: 75%;
                position:relative;
                left: 13%;
            }
        }
        & .card__profile__info {
            border: 1px solid black;
            border-radius: 25px;
            width: 90vh;
            height: 50vh;
            display: flex;
            flex-direction: column;
            position: relative;
            top: 70px;
            right: 20vh;
            & h3 {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                top: 10vh;
            }
    }
}
`;
