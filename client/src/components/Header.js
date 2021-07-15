import PropTypes from 'prop-types';
import MainNav from './spreadMenu/MainNav';
import Logo from '../widespread_logo_1d.png';

const Header = ({title}) => {
    return (
        <div className="spread-menu-container">
            <div className="spread-menu-home">
                <div className="spread-menu-logo">
                    <img src={Logo}></img>
                </div>
            </div>
            <div className="spread-menu-nav">
                <MainNav />
            </div>
        </div>
    )
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}


export default Header
