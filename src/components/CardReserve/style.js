import styled from "styled-components";

const primaryColor = `#0b1645`;

const CardContainer = styled.div`

    width: 1050px;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px 30px;
    border-radius: 5px;
    box-shadow: 0 14px 14px #77777742;
    background: #fff;

`;

const CardImg = styled.img`

    width: 180px;
    border-radius: 5px;

`;

const CardContainerTitle = styled.div`

    padding: 10px;
    width: 320px;
    text-align: center;

`;

const CardTitleContent = styled.h2`

    padding-bottom: 5px;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 3px;
    border-bottom: 1px solid ${primaryColor};
    color: ${primaryColor};

`;

const CardContainerList = styled.ul`

    height: 150px;
    padding: 0;
`;

const CardListContent = styled.li`

    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    text-align: center;
    list-style: none;

`;

const CardListButton = styled.button`

    width: 200px;
    padding: 10px 30px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: .2s;
    color: #fff;
    background: ${primaryColor};

    &:hover{
        color: ${primaryColor};
        border-color: ${primaryColor};
        background: transparent;
    }

`;

export { CardContainer, CardImg,
    CardContainerTitle, CardTitleContent,
    CardContainerList, CardListContent,
    CardListButton };