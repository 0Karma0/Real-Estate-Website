import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const EstateCard = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { id,estate_title,image,description,segment_name,price,status,area,location,facilities } = data || {};

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{estate_title}</h2>
                <p>{description}</p>
                <p>Segment_name: {segment_name}</p>
                <p>Price: {price}</p>
                <p>Status: {status}</p>
                <p>Area: {area}</p>
                <p>Location: {location}</p>
                <p>Facilities: {facilities}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/details/${id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;