import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

export default function Technology() {
    const { t } = useTranslation();

    return (
        <div className="tech-container">
            <h1>{t('technology.title')}</h1>
        </div>
    )
}
