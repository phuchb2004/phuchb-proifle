import './style.css';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiNextdotjs, SiVuedotjs, SiLaravel, SiDotnet } from 'react-icons/si';
import phucImg from '../../assets/sen.png';
import bu2fc from '../../assets/sport/bu2fc.jpg';
import start from '../../assets/sport/start.jpg';
import withFamily from '../../assets/sport/with-family.jpg';
import pth from '../../assets/sport/pth.jpg';
import goal from '../../assets/sport/goal.mp4';
import top12Vcvb from '../../assets/sport/top1-2-vcvb.jpg';
import cbfc from '../../assets/sport/cbfc.jpg';
import goalVcvb from '../../assets/sport/goal-vcvb.mp4';
import RevealOnScroll from '../../components/reveal-on-scroll';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            {/* General */}
            <RevealOnScroll direction="right">
                <div className="about-general">
                    <div className="about-left">
                        <div className="about-img-wrapper">
                            <img src={phucImg} alt="About Phuc" />
                            
                            <div className="social-links">
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
                        <h1>{t('about.general.title')}</h1>

                        <p>
                            {t('about.general.description')}
                        </p>

                        <div className="tech-stack">
                            <h3>{t('about.general.tech.head')}</h3>
                            <div className="skills-grid">
                                <div className="skill-item">
                                    <FaReact/> {t('about.general.tech.react')}
                                </div>
                                <div className="skill-item">
                                    <SiNextdotjs/> {t('about.general.tech.next')}
                                </div>
                                <div className="skill-item">
                                    <SiVuedotjs/> {t('about.general.tech.vue')}
                                </div>
                                <div className="skill-item">
                                    <FaNodeJs/> {t('about.general.tech.node')}
                                </div>
                                <div className="skill-item">
                                    <SiLaravel/> {t('about.general.tech.laravel')}
                                </div>
                                <div className="skill-item">
                                    <SiDotnet/> {t('about.general.tech.dotnet')}
                                </div>
                                <div className="skill-item">
                                    <FaDatabase/> {t('about.general.tech.mysql')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>

            {/* Sport */}
            <RevealOnScroll direction="left">
                <div className="about-sport">
                    <div className="sport-title">
                        <h3>{t('about.sport.title')}</h3>
                        <p>{t('about.sport.description')}</p>
                    </div>
                    
                    <RevealOnScroll direction="right">
                        <div className="sport-media">
                            <div className="sport-img">
                                <img src={bu2fc} alt="BU2FC" />
                                <img src={start} alt="lineup" />
                                <img src={withFamily} alt="family" />
                                <img src={pth} alt="brothers" />
                            </div>

                            <div className="sport-video">
                                <video src={goal} controls></video>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll direction="left">
                        <div className="sport-media">
                            <div className="sport-img">
                                <img src={top12Vcvb} alt="top1-2" />
                                <img src={cbfc} alt="cbfc" />
                            </div>

                            <div className="sport-video">
                                <video src={goalVcvb} controls></video>
                            </div>
                        </div>
                    </RevealOnScroll>                
                </div>
            </RevealOnScroll>
        </div>
    )
}