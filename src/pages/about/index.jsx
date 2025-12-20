import './style.css';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiNextdotjs, SiVuedotjs, SiLaravel, SiDotnet } from 'react-icons/si';
import phucImg from '../../assets/sen.png';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            {/* General */}
            <div className="about-general">
                <div className="about-left">
                    <div className="about-img-wrapper animate-fade-left">
                        <img src={phucImg} alt="About Phuc" />

                        <div className="social-links animate-fade-left delay-2">
                            <a href="https://github.com/phuchb2004" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                            </a>
                            <a href="https://www.facebook.com/phuc.hoangbao.908/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook/>
                            </a>
                            <a href="https://www.instagram.com/hoaqbp_/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram/>
                            </a>
                            <a href="https://www.linkedin.com/in/ph%C3%BAc-ho%C3%A0ng-b%E1%BA%A3o-aba958399/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <h1 className="animate-fade-right">{t('about.right.title')}</h1>

                    <p className="animate-fade-right delay-1">
                        {t('about.right.description')}
                    </p>

                    <div className="tech-stack animate-fade-right delay-2">
                        <h3>{t('about.right.tech.head')}</h3>
                        <div className="skills-grid">
                            <div className="skill-item">
                                <FaReact/> {t('about.right.tech.react')}
                            </div>
                            <div className="skill-item">
                                <SiNextdotjs/> {t('about.right.tech.next')}
                            </div>
                            <div className="skill-item">
                                <SiVuedotjs/> {t('about.right.tech.vue')}
                            </div>
                            <div className="skill-item">
                                <FaNodeJs/> {t('about.right.tech.node')}
                            </div>
                            <div className="skill-item">
                                <SiLaravel/> {t('about.right.tech.laravel')}
                            </div>
                            <div className="skill-item">
                                <SiDotnet/> {t('about.right.tech.dotnet')}
                            </div>
                            <div className="skill-item">
                                <FaDatabase/> {t('about.right.tech.mysql')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sport */}
            <div className="about-sport">

            </div>
        </div>
    )
}