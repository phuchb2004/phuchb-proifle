import './style.scss';
import { HomeOutlined } from '@ant-design/icons';
import { FaUserGraduate, FaFutbol } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import RevealOnScroll from '../../components/reveal-on-scroll';
import { useTranslation } from 'react-i18next';
import baseApi from '../../base-api/baseApi';
import Loading from '../../components/loading';
/* Images */
import hsg12 from '../../assets/vcvb/hsg-12.jpg';
import a209 from '../../assets/vcvb/a209.jpg';
import a1k62 from '../../assets/vcvb/a1k62.jpg';
import a1fc from '../../assets/vcvb/a1fc.jpg';
import xuho from '../../assets/xuho/lop.jpg';
import aexuho from '../../assets/xuho/ae.jpg';
import aexuho2 from '../../assets/xuho/ae2.jpg';
import gac from '../../assets/xuho/gac.jpg';

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
            </RevealOnScroll>

            <RevealOnScroll direction="right">
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

                                    <p>
                                        <FaUserGraduate className="edu-icon"/>
                                        <span>{t('education.achievement.description1')}</span>
                                    </p>
                                    <p>
                                        <FaFutbol className="edu-icon"/>
                                        <span>{t('education.achievement.description2')}</span>
                                    </p>
                                    <p>
                                        <FaFutbol className="edu-icon"/>
                                        <span>{t('education.achievement.description3')}</span>
                                    </p>
                                </div>

                                <div className="achievement-img">
                                    <img src={a1k62} alt="Tập thể A1K62VCVB" />
                                    <img src={a209} alt="anh em A209" />
                                    <img src={a1fc} alt="Đội bóng A1K62" />
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
                            <p className="xuho-memo">{t('education.xuhoMemo')}</p>
                            <div className="university-image-container">
                                <img src={xuho} alt="Ảnh tập thể lớp" />
                                <img src={aexuho} alt="Anh em" />
                                <img src={aexuho2} alt="Anh em 2" />
                                <img src={gac} alt="Đi gác" />
                            </div>
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
