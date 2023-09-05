import styled from 'styled-components';

export const PrivateComponentStyles = styled.div`
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .movie-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); 
        gap: 16px; 
    }
`