import styled from "styled-components";

const NavbarHeader = styled.header`

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 50px;
    background: #010145;

`;

const NavbarNav = styled.nav`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

`;

const NavbarLogoContent = styled.h2`

    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;

`;

const NavbarLinks = styled.ul`
    
    width: 215px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
const NavbarLinksItem = styled.li`
 
    list-style: none;

    a{  
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        letter-spacing: 3px;
        color: #fff;

        span{
            align-items: center;
            margin-left: 5px;
            padding:4px 8px;
            border-radius: 100%;
            color: #0b1645;
            background: #fff;
        }
    }
`;


export { NavbarHeader, NavbarNav,
    NavbarLinks, NavbarLogoContent,
    NavbarLinksItem };