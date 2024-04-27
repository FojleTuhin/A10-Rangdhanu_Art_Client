import { FaShareAlt } from "react-icons/fa";
import { FaHeart, FaStar } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {

   
    const items =useLoaderData();
    const {id}=useParams();
    const item = items.find(item => item._id === id);
    const{itemName,
        subcategory,
        image,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        description,
       }=item;
    
    return (
        <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[100px] pt-10 pb-1 text-black'>
            <div className='grid grid-cols-2 px-14 py-8 gap-14 bg-[#fff] rounded-2xl'>
                <div className='col-span-1'>
                    <img className='h-[500px] w-full rounded-2xl' src={image} alt="" />
                </div>
                <div className='col-span-1'>

                    <div>
                        <p className="mt-4 font-bold text-2xl"> {itemName}</p>
                        <div className="flex justify-between mt-4 items-center">
                            <p className=" font-bold text-xl">{subcategory}</p>
                            <p className="font-bold">Stock: {stockStatus}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex text-2xl mt-4 font-bold items-center text-[#3EA570]"><FiDollarSign />{price} tk</p>
                            <p className="flex text-2xl mt-4 gap-2 font-bold items-center"><FaStar className=" text-yellow-500" />{rating}</p>

                        </div>

                        <p className="text-xl font-medium mt-4">Customization: {customization}</p>
                        <p className="text-xl font-medium mt-4">Processing_time: {processing_time}</p>

                        <div className="grid grid-cols-2 gap-3 mt-10">
                            <div>
                                <button className="btn bg-[#EBFBE5] text-[#3EA570] border-[#3EA570] w-full rounded-full text-xl mt-5"><FaHeart />Save</button>
                            </div>
                            <div>
                                <button className="btn bg-[#EBFBE5] text-[#3EA570] border-[#3EA570] w-full rounded-full text-xl mt-5"><FaShareAlt />Share</button>
                                </div>
                        </div>

                        <button className="btn bg-[#3EA570] text-white border-none w-full text-xl mt-5 rounded-full">Add</button>
                    </div>

                </div>
            </div>
            <div className="mt-10 bg-[#fff] rounded-2xl p-8 mb-10">
                    <p className="text-[#3EA570] font-bold text-2xl">Description:</p>
                    <p>{description}</p>
            </div>
        </div>
    );
};

export default ViewDetails;