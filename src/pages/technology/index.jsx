import React, { useState, useEffect } from 'react';
import './style.scss';
import { useTranslation } from 'react-i18next';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiAwsamplify, SiRender } from 'react-icons/si';
import RevealOnScroll from '../../components/reveal-on-scroll';
import baseApi from '../../base-api/baseApi';
import Loading from '../../components/loading';

export default function Technology() {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tech, setTech] = useState([]);

    useEffect(() => {
        const fetchTech = async () => {
            try {
                const res = await baseApi.get('/tech');
                setTech(res);
                setLoading(false);
            }
            catch (error) {
                console.error("Lỗi, không lấy được data Technology", error);
                setError(error.message);
            }
        }
        fetchTech();
    }, [])

    const getTechIcon = (name) => {
        const lowerName = name?.toLowerCase() || "";
        const colors = {
            react: "#61DAFB",
            node: "#339933",
            mongo: "#47A248",
            aws: "#FF9900",
            default: "#cbd5e1"
        };

        if (lowerName.includes('react')) return <FaReact color={colors.react} />;
        if (lowerName.includes('node')) return <FaNodeJs color={colors.node} />;
        if (lowerName.includes('mongo')) return <SiMongodb color={colors.mongo} />;
        if (lowerName.includes('aws')) return <SiAwsamplify color={colors.aws} />;
        if (lowerName.includes('render')) return <SiRender className="icon-render" />;
        return <FaCode color={colors.default} />;
    };

    if (loading) return <Loading/>;
    if (error) return <div className="error-state">{error}</div>;

    return (
        <div className="tech-container">
            <RevealOnScroll direction="left">
                <div className="tech-header">
                    <h2>{t('technology.title')}</h2>
                    <p className="tech-desc">{t('technology.description')}</p>
                </div>
            </RevealOnScroll>
            
            <RevealOnScroll direction="right">
                <div className="tech-block">
                    {tech.map((techno) => (
                        <a 
                            className="tech-item" 
                            key={ techno.techId }
                            href={ techno.techUrl }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="tech-icon-wrapper">
                                {getTechIcon(techno.techName)}
                            </div>
                            <div className="tech-info">
                                <h4> {techno.techName} </h4>
                                <span className="tech-category"> {techno.category} </span>
                            </div>
                        </a>
                    ))}
                </div>
            </RevealOnScroll>
        </div>
    )
}
