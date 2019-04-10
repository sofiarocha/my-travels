import React, { Fragment} from 'react';

const Travel = ({ name, country, photoUrl, distance }) => (
    <Fragment>
        <p>I love to travel to {name}, in {country}</p>
        <img src={photoUrl} />
        <p>Is {distance} km from Lisbon.</p>
    </Fragment>
);

export default Travel;