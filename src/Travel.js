import React, { Fragment} from 'react';

const Travel = ({ name, country, photoUrl, distance }) => (
    <Fragment>
        <p>I traveled to {name}, in {country}</p>
        <p>Is {distance} km from Lisbon.</p>
        <img src={photoUrl} />
    </Fragment>
);

export default Travel;