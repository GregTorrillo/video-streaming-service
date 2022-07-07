import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import { useStateContext } from '../../Provider';

const Header = (props) => {
    const globalState = useStateContext();

    return (<header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header--menu-open' : ''}`}>
        <div className="top-header__left-side">
            <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpenAction(true)}>
                <i className="fas fa-bars" />
            </div>
            <div className="top-header__search-btn">
                <i className="fas fa-search" />
            </div>
        </div>
        <div className="top-header__logo"></div>
        <div className="top-header__account" onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="top-header__user-img" />
            <div className="top-header__user-name">Jen</div>
        </div>
        <Account />
        <SearchModal />
    </header>)
}

export default Header; 