import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ item }) => {

    const { _id,
        subcategory,
        image,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        description,
        userName,
        email } = item;

    return (
        <div>
            <div>

                {/* <div data-aos="zoom-in-right" className="card group w-[300px]  bg-white bg-opacity-80 shadow-xl hover:bg-[#16325B] hover:text-white">
                    <figure className="px-6 pt-6">
                        <img src={image} className="rounded-xl h-[252px] w-[252px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[16px]">{subcategory}</h2>
                        <div className="flex items-center justify-between">

                            <p className="text-xl font-bold">{price} tk</p>
                            <p className="text-xl font-bold text-right ">Stock: {stockStatus}</p>

                        </div>

                        <div className="flex items-center gap-2">
                            <FaStar />
                            <p>{rating}</p>
                        </div>

                        <hr className=" mt-1 mb-1" />

                        <div className="">
                            <Link to={`viewDetails/${_id}`}><button className="btn bg-[#16325B] group-hover:bg-white group-hover:text-[#16325B] border-none text-white w-full">View details</button></Link>
                        </div>
                    </div>
                </div> */}

                <div  className="card group w-[300px] bg-white bg-opacity-80 shadow-xl hover:bg-[#16325B] hover:text-white">
                    <figure className="px-6 pt-6">
                        <img src={image} className="rounded-xl h-[252px] w-[252px] transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-[16px]">{subcategory}</h2>
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold">{price} tk</p>
                            <p className="text-xl font-bold text-right">Stock: {stockStatus}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaStar />
                            <p>{rating}</p>
                        </div>
                        <hr className="mt-1 mb-1" />
                        <div className="">
                            <Link to={`viewDetails/${_id}`}>
                                <button className="btn bg-[#16325B] group-hover:bg-white group-hover:text-[#16325B] border-none text-white w-full">View details</button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Card;