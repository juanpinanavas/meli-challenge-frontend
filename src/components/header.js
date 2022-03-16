import '../styles/components/header.scss';
import Searcher from './searcher';

const Header = () => {
    return (
        <header className="header" >
            <div className="header__container">
                <a href="/">
                    <img className="header__logo" src={require('../assets/img/logo_mercado_libre.png')} alt="Logo" />
                </a>
                <div className="header__searcher">
                    <Searcher />
                </div>
            </div>
        </header>
    )
};

export default Header;