import styled from 'styled-components';

export const FooterStyles = styled.div`
.footer {
    width: 100%;
    height: 80px;
    background-color: #c6dbc0;
    display: flex;
    align-items: center;
    position: fixed;
    position: absolute;
    bottom: 0;
    &__links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__links-left {
        display: flex;
        align-items: center;
        margin-left: 50vh;
    }
    &__copyright {
        font-size: 30px;
    }

    &__links-right {
        display: flex;
        align-items: center;
        margin-right: 50vh;


`