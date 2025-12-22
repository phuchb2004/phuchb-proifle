import React from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';

export default function Donation() {
    const { t } = useTranslation();

    return (
        <div className="donation-container">
            <h1>{t('donation.title')}</h1>
        </div>
    )
}
