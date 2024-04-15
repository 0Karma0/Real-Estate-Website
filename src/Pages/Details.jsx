import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Data from "../Hooks/Data";
// eslint-disable-next-line react/prop-types
const Details = () => {

    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const { data} = Data();


    useEffect(() => {
        if(data){
            const singleData = data.find(item => item.id == id);
            setSingleData(singleData);
        }
    }, [data, id])

    // eslint-disable-next-line react/prop-types
    const { estate_title, image, description, segment_name, price, status, area, location, facilities } = singleData || {};
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className="w-[600px]" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{estate_title}</h2>
                <p>{description}</p>
                <p>Segment_name: {segment_name}</p>
                <p>Price: {price}</p>
                <p>Status: {status}</p>
                <p>Area: {area}</p>
                <p>Location: {location}</p>
                <p>Facilities: {facilities}</p>
            </div>
        </div>
    );
};

export default Details;