import React from 'react';
import './History.css';
import Card from "./Card"
import Profile from "./Profile"
import Badges from './Badges'
import * as data from "./Background.json";
import Images from "./Images";

function History(props) {
    const imageCards = Images.map((i) =>
        <Card image={i} />
    );

    return (
        <div className="history__content">
            <Profile bio={data.profile.bio} />
            <Badges social={data.profile.social} />
            <hr />
            <div className="history__cards">
                {imageCards}
            </div>
        </div>
    );
}

export default History;