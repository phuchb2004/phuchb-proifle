import './style.scss';
import { HomeOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import hsg12 from '../../assets/hsg-12.jpg';
import RevealOnScroll from '../../components/reveal-on-scroll';
import { useTranslation } from 'react-i18next';
import baseApi from '../../base-api/baseApi';
import Loading from '../../components/loading';

export default function Education() {
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [certificate, setCertificate] = useState([]);
    const currentLang = i18n.language.startsWith('en') ? 'en' : 'vi';

    useEffect(() => {
        const fetchCertificate = async () => {
            try {
                const res = await baseApi.get('/certificate');
                setCertificate(res);
                setLoading(false);
            }
            catch (error) {
                console.error("Lỗi, không lấy được data Certificate", error);
                setError(error.message);
            }
        }
        fetchCertificate();
    }, [])

    if (loading) return <Loading/>;
    if (error) return <div className="error-state">{error}</div>;

    return (
        <div className="education-container">
            <RevealOnScroll direction="left">
                <h2 className="edu-title">{t('education.title.education')}</h2>

                <div className="formal-education">
                    <div className="edu-card highschool">
                        <div className="card-content">
                            <span className="edu-year">{t('education.period.highschool')}</span>
                            <h3 className="school-header">
                                <HomeOutlined /> {t('education.schoolName.highschool')}
                            </h3>
                            <div className="achievement-block">
                                <div className="achievement-info">
                                    <h4>{t('education.achievement.label')}</h4>
                                    <p>{t('education.achievement.description')}</p>
                                </div>

                                <div className="achievement-img">
                                    <img src={hsg12} alt="Giấy khen HSG lớp 12" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="edu-card colleague">
                        <div className="card-content">
                            <span className="edu-year">{t('education.period.colleague')}</span>   
                            <h3 className="school-header"> 
                                <HomeOutlined /> {t('education.schoolName.colleague')}
                            </h3>
                            <p className="edu-major">{t('education.major')}</p>
                            <ul className="edu-desc">
                                <li>{t('education.rating')}</li>
                                <li>{t('education.project')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right">
                <h3 className="certificate-title">{t('education.title.certificate')}</h3>

                <div className="certificate">
                    {certificate.map((certi) => (
                        <a 
                            className="certificate-item"
                            key={ certi.certificateId }
                            href={ certi.certificateUrl }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h4> {certi.title[currentLang]} </h4>
                            <p> {certi.description} </p>
                        </a>
                    ))}
                </div>
            </RevealOnScroll>
        </div>
    )
}
