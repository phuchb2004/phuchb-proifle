import './style.css';
import React, { useState, useEffect } from 'react';
import {  useTranslation } from 'react-i18next';
import RevealOnScroll from '../../components/reveal-on-scroll';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import baseApi from '../../base-api/baseApi';
import Loading from '../../components/loading';

export default function Experience() {
    const { t, i18n } = useTranslation();
    const [exp, setExp] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const currentLang = i18n.language.startsWith('en') ? 'en' : 'vi';

    useEffect(() => {
        const fetchExp = async () => {
            try {
                const res = await baseApi.get('/experience');
                setExp(res);
                setLoading(false);
            }
            catch (error) {
                console.error("Lỗi, không lấy được data Experience", error);
                setError(error.message)
            }
        }
        fetchExp();
    }, []);

    if (loading) return <Loading/>;
    if (error) return <div className="error-state">{error}</div>;

    return (
        <div className="experience-container">
            <RevealOnScroll direction="left">
                <h2>{t('experience.title')}</h2>
            </RevealOnScroll>

            <div className="timeline-wrapper">
                {exp.map((company) => (
                    <RevealOnScroll direction="right" key={ company.companyId }>
                        <div className="company-block">
                            <div className="company-header">
                                <div className="company-icon">
                                    <FaBriefcase/>
                                </div>
                                <h3 className="company-name">{ company.companyName }</h3>
                            </div>

                            <div className="project-list">
                                {company.projects && company.projects.map((project, pIndex) => (
                                    <div key={pIndex} className="project-card">
                                        <div className="project-header">
                                            <h4 className="project-title">
                                                { project.title[currentLang] }
                                            </h4>
                                            <span className="project-period">
                                                <FaCalendarAlt/> { project.period }
                                            </span>
                                        </div>

                                        <div className="project-role">
                                            <span className="label">{t('experience.label.role')} </span> { project.role[currentLang] }
                                        </div>
                                        
                                        <div className="project-description">
                                            <span className="label">{t('experience.label.description')} </span> { project.description[currentLang] }
                                        </div>

                                        <div className="project-tech">
                                            <span className="label">{t('experience.label.tech')} </span> { project.techStack }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>
    )
}
