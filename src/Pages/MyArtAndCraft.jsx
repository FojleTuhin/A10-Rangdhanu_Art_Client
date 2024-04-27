import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { FaStar } from "react-icons/fa6";

const MyArtAndCraft = () => {
    const items = useLoaderData();
    const { user } = useContext(AuthContext);


    const item = items.filter(item => item.email === user.email);



    return (
        <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[100px]  text-black '>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">My Art and Craft</h1>
            </div>
            <div className="flex gap-6 justify-center flex-wrap">
                {
                    item.map(data =>
                        <div key={data._id}>
                            <div className="card w-[300px] shadow-xl">
                                <figure className="px-6 pt-6">
                                    <img src={data.image} className="rounded-xl" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{data.subcategory}</h2>
                                    <div className="flex items-center justify-between">

                                        <p className="font-bold">{data.price} tk</p>
                                       
                                        <p className=" text-[#4F95FF]">Stock: {data.stockStatus}</p>

                                    </div>


                                    <div className="flex justify-between">
                                        <p>Customization:{data.customization}</p>
                                        <div className="flex items-center gap-2">
                                            <FaStar />
                                            <p>{data.rating}</p>
                                        </div>


                                    </div>
                                    <hr className="bg-[#D1D1D1] mt-3 mb-3" />


                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MyArtAndCraft;