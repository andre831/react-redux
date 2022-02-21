import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NavbarHeader, NavbarNav,
    NavbarLogoContent, NavbarLinks,
    NavbarLinksItem } from './style';

function Navbar() {
    const reserveLenght = useSelector(
        state => state.reserve.length
    );

    return (
        <NavbarHeader>
            <NavbarNav>
                <NavbarLogoContent>
                    Trip
                </NavbarLogoContent>
                <NavbarLinks>
                    <NavbarLinksItem>
                        <Link to="/">
                            Início
                        </Link>
                    </NavbarLinksItem>
                    <NavbarLinksItem>
                        <Link to="/reserve">
                            Reservas 
                            <span>{reserveLenght}</span>
                        </Link>
                    </NavbarLinksItem>
                </NavbarLinks>
            </NavbarNav>
        </NavbarHeader>
    );
}

export default Navbar;