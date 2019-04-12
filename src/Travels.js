import React, { Fragment} from 'react';
import Travel from "./Travel";

const travels = [
    {
        name: "Tokyo",
        country: "Japan",
        photoUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=771&q=80",
        distance: "11 136"
    },
    {
        name: "Nairobi",
        country: "Kenya",
        photoUrl: "https://images.unsplash.com/photo-1502088513349-3ff6482aa816?ixlib=rb-1.2.1&auto=format&fit=crop&w=792&q=80",
        distance: "9 224,5"
    },
    {
        name: "London",
        country: "UK",
        photoUrl: "https://images.unsplash.com/photo-1514557718210-26e452f8fab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        distance: "2 182,8"
    },
    {
        name: "Bagan",
        country: "Myanmar",
        photoUrl: "https://images.unsplash.com/photo-1468336210566-1e743694dc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
        distance: "9 683"
    },
    {
        name: "Bangkok",
        country: "Thailand",
        photoUrl: "https://images.unsplash.com/photo-1496307375181-4568d53d89af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        distance: "10 677"
    },
]

const Travels = () => (
    <Fragment>
        {travels.map((travel) => (
            <Travel key={travel.name} name={travel.name} country={travel.country} photoUrl={travel.photoUrl} distance={travel.distance}/>
        ))}
    </Fragment>
);

export default Travels;