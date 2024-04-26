import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div>
            <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1">

                <div className="card w-[300px] bg-base-100 shadow-xl ">
                    <figure className="px-6 pt-6">
                        <img src="https://i.ibb.co/vXfVwVf/373426498-6520671958001121-3934064029775498293-n.jpg" className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">segment name</h2>
                        <div className="flex items-center justify-between">

                            <p className="text-xl font-bold">price</p>
                            <p className="text-xl font-bold text-right text-[#4F95FF]">status</p>

                        </div>

                        <div className="flex items-center gap-2">
                            <FaLocationDot />
                            <p>location</p>
                        </div>

                        <hr className="bg-[#D1D1D1] mt-3 mb-3" />

                        <div className="card-actions">
                            <Link><button className="btn bg-[#4F95FF] text-white">View details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;