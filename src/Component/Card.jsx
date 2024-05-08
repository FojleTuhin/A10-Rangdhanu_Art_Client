import { FaLocationDot, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({item}) => {

    const{_id,
        subcategory,
        image,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        description,
        userName,
        email}=item;

    return (
        <div>
            <div>

                <div className="card w-[300px]  shadow-xl ">
                    <figure className="px-6 pt-6">
                        <img src={image} className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{subcategory}</h2>
                        <div className="flex items-center justify-between">

                            <p className="text-xl font-bold">{price} tk</p>
                            <p className="text-xl font-bold text-right text-[#4F95FF]">Stock: {stockStatus}</p>

                        </div>

                        <div className="flex items-center gap-2">
                        <FaStar />
                            <p>{rating}</p>
                        </div>

                        <hr className="bg-[#D1D1D1] mt-3 mb-3" />

                        <div className="card-actions">
                            <Link to={`viewDetails/${_id}`}><button className="btn bg-[#3EA570] border-none text-white">View details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;