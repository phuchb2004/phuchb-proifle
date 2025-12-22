import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/sen.png';

export default function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(true);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="header-container">
            <div className="header-title">
                <NavLink to="/home">
                    <h1 className="desktop-title">{t('header.title')}</h1>
                    <img src={logo} alt="Logo" className="mobile-logo" />
                </NavLink>
            </div>

            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes/> : <FaBars/>}
            </div>

            <nav className={`header-menu ${isMenuOpen ? 'active' : ''}`}>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'active-menu' : 'inactive-menu'}
                    onClick={closeMenu}
                >
                    {t('header.menu.home')}
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({ isActive }) => isActive ? 'active-menu' : 'inactive-menu'}
                    onClick={closeMenu}
                >
                    {t('header.menu.about')}
                </NavLink>
                <NavLink 
                    to="/experience"
                    className={({ isActive }) => isActive ? 'active-menu' : 'inactive-menu'}
                    onClick={closeMenu}
                >
                    {t('header.menu.experience')}
                </NavLink>
                <NavLink 
                    to="/education"
                    className={({ isActive }) => isActive ? 'active-menu' : 'inactive-menu'}
                    onClick={closeMenu}
                >
                    {t('header.menu.education')}
                </NavLink>
                <NavLink
                    to="/technologies"
                    className={({ isActive }) => isActive ? 'active-menu' : 'inactive-menu'}
                    onClick={closeMenu}
                >
                    {t('header.menu.technology')}
                </NavLink>
                <NavLink
                    to="/donation"
                    className={({ isActive }) => isActive ? 'active-menu' : 'inactive-menu'}
                    onClick={closeMenu}
                >
                    {t('header.menu.donation')}
                </NavLink>

                <div className="lang-switch">
                    <span
                        onClick={() => changeLanguage('vi')}
                        className={i18n.language === 'vi' ? 'active-lang' : 'inactive-lang'}
                    >
                        {t('header.menu.languages.vi')}
                    </span>
                    <span className="separator">|</span>
                    <span
                        onClick={() => changeLanguage('en')}
                        className={i18n.language === 'en' ? 'active-lang' : 'inactive-lang'}
                    >
                        {t('header.menu.languages.en')}
                    </span>
                </div>
            </nav>
        </div>
    )
}
