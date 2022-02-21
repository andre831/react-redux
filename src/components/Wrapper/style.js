import styled from "styled-components";

const WrapperField = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px){
        flex-direction: row;
    };

`;

export {WrapperField};