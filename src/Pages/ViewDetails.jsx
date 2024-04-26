import { FaShareAlt } from "react-icons/fa";
import { FaHeart, FaStar } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";

const ViewDetails = () => {
    return (
        <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[100px] pt-10 pb-1 text-black'>
            <div className='grid grid-cols-2 px-14 py-8 gap-14 bg-[#fff] rounded-2xl'>
                <div className='col-span-1'>
                    <img className='h-[500px] w-full rounded-2xl' src="https://i.ibb.co/hsfnKX8/385524991-324124630386814-490333696148519164-n.jpg" alt="" />
                </div>
                <div className='col-span-1'>

                    <div>
                        <p className="mt-4 font-bold text-2xl"> Painting and Drawing</p>
                        <div className="flex justify-between mt-4 items-center">
                            <p className=" font-bold text-xl">abstract oil painting</p>
                            <p className="font-bold"> In Stock</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="flex text-2xl mt-4 font-bold items-center text-[#3EA570]"><FiDollarSign />1500</p>
                            <p className="flex text-2xl mt-4 gap-2 font-bold items-center"><FaStar className=" text-yellow-500" />3.6</p>

                        </div>

                        <p className="text-xl font-medium mt-4">Customization: Yes</p>
                        <p className="text-xl font-medium mt-4">processing_time: 4.25.3432</p>

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut accusantium provident aperiam. Praesentium cum nam aliquid, minus illum corrupti assumenda labore. Tempore eligendi ipsum accusamus architecto repellendus voluptatibus fugit?</p>
            </div>
        </div>
    );
};

export default ViewDetails;