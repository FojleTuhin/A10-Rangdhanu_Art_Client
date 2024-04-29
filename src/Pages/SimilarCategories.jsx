import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link, useLoaderData, useParams } from "react-router-dom";

const SimilarCategories = () => {

    const categories = useLoaderData();
    const { id } = useParams();
    const categorie = categories.find(categorie => categorie._id === id);



    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('https://rangdhanu-art-server.vercel.app/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])


    const item = items.filter(item => item.itemName === categorie.itemName);


    return (
        <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[100px] pb-10 text-black '>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">Similar Categories</h1>
            </div>

            <div className="bg-white text-black py-4 mt-5 rounded-2xl">
                <h1 className="font-bold text-xl text-center">{categorie.itemName}</h1>
            </div>

            <div className="flex gap-6 justify-center flex-wrap mt-5">
                {
                    item.map(data =>
                        <div key={data._id}>

                            <div className="card w-[300px]  shadow-xl ">
                                <figure className="px-6 pt-6">
                                    <img src={data.image} className="rounded-xl" />
                                </figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{data.itemName}</h2>
                                    <h2 className="">{data.subcategory}</h2>
                                    <div className="flex items-center justify-between">

                                        <p className="">{data.price} tk</p>
                                        <div className="flex items-center gap-2">
                                            <FaStar />
                                            <p>{data.rating}</p>
                                        </div>
                                    </div>


                                    <p className=" ">Processing Time: {data.processing_time}</p>
                                    <hr className="bg-[#D1D1D1] mt-1 mb-1" />

                                    <p className=" ">{data.description}</p>


                                    <hr className="bg-[#D1D1D1] mt-3 mb-3" />

                                    <div className="card-actions">
                                        <Link to={`viewDetails/${data._id}`}><button className="btn border-none bg-[#3EA570] text-white">View details</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }




            </div>

        </div>
    );
};

export default SimilarCategories;