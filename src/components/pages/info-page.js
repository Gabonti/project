import React from "react";
import './info-page.css';
import intro from './me.jpg'; // Use a relative import

const InfoPage = () => {
    return (
        <div className="info-container">
            <div className="info-content">
                <div className="info-item-photo">
                    <img src={intro} alt="intro"/>
                </div>
                <div className="info-item">
                    <p><strong>Name:</strong> Gabdilkarim</p>
                    <p><strong>Surname:</strong> Ata</p>
                    <p><strong>Number:</strong> 8-777-777-7777</p>
                    <p><strong>Email:</strong> gabdilkarim05@mail.ru</p>

                </div>
            </div>
        </div>
    );
};

export default InfoPage;
