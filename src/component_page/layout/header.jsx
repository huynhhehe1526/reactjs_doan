//resp
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo_VietNam from '../../assets/image/logo_VietNam.png';
import logo_nuocAnh from '../../assets/image/logo_nuocAnh.png';
import { useTranslation } from '../../lang/LanguageProvider';
import '../scss/header.scss';

const Header = () => {
    const navigate = useNavigate();
    const [showLanguageOptions, setShowLanguageOptions] = useState(false);
    const { i18n, switchLanguage } = useTranslation();
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [menuActive, setMenuActive] = useState(false); 

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) setLoggedInUser(username);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');
        setLoggedInUser(null);
        navigate('/login');
    };

    const redirectMarket = () => {
        navigate("/market");
    };

    const redirectBinance = () => {
        navigate("/minigames");
    };

    const redirectWallet = () => {
        navigate("/wallets");
    };

    const redirectExchange = () => {
        navigate("/exchange");
    };

    const redirectLogin = () => {
        navigate("/login");
    };
    const redirectHomepage = () => {
        navigate("/");
    };

    const handleChangeLanguage = () => {
        setShowLanguageOptions(true);
    };

    const handleLanguageSelect = (locale) => {
        switchLanguage(locale);
        setShowLanguageOptions(false);
    };

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <>
            <div className="header">
                <div className="logo"
                    onClick={redirectHomepage}
                ></div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className={`menu-container ${menuActive ? 'active' : ''}`}>
                    <ul className="menu">
                        <li className="menu-item">
                            <a onClick={redirectMarket}>{i18n.t('header.market')}</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={redirectBinance}>{i18n.t('header.binance')}</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={redirectWallet}>{i18n.t('header.wallet')}</a>
                        </li>
                        <li className="menu-item">
                            <a onClick={redirectExchange}>{i18n.t('header.exchange')}</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" onClick={handleChangeLanguage}>{i18n.t('header.language')}</a>
                            {showLanguageOptions && (
                                <ul className="submenu">
                                    <li className="submenu-item">
                                        <img className='logo-nation' src={logo_VietNam} alt='Việt Nam' />
                                        <a onClick={() => handleLanguageSelect('vi')}>{i18n.t('header.language_vi')}</a>
                                    </li>
                                    <li className="submenu-item">
                                        <img className='logo-nation' src={logo_nuocAnh} alt='Anh' />
                                        <a onClick={() => handleLanguageSelect('en')}>{i18n.t('header.language_en')}</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* {loggedInUser ? (
                            <li className="menu-item">
                                <a>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbeAe-tJC8MFGPrUx5_fUvIBUasHxbO95Kw&s" alt="Profile" className="profile-logo" onClick={() => setShowProfileMenu(!showProfileMenu)} />
                                </a>
                                <span onClick={() => setShowProfileMenu(!showProfileMenu)}>{loggedInUser}</span>
                                {showProfileMenu && (
                                    <ul className='submenu'>
                                        <li className='submenu-item'>
                                            <a onClick={handleLogout}> Logout</a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="menu-item">
                                <a onClick={redirectLogin}>{i18n.t('header.login')}</a>
                            </li>
                        )
                        } */}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
