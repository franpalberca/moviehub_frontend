import styled from 'styled-components'

export const CardStyles = styled.div`
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
        max-height: 650px;
        border-radius: 35px;
        border: 1px solid rgba(0, 0, 0, 0.8);
        background: rgba(250, 250, 250, 0.8);
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        margin-bottom: 4rem;
        &__header-img {
            width: 40vh;
            border-radius: 20px;
            position: relative;
            top: 12px;
        }
        &__main {
            display: flex;
            flex-direction: column;
            position: relative;
            top: 15px;
            &-titleMovie {
                position: relative;
                top: 7px
            }
    }    
}
    `