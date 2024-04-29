import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Categories = () => {

    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('https://rangdhanu-art-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])







    return (
        <div className=' px-4 md:px-8 lg:px-[100px] pb-10 mt-10'>

            <p className="mb-10 font-bold text-3xl text-center ">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                        'Art & Craft Categories',
                    ]}
                />
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
                {
                    categories.map(categorie =>
                        <div key={categorie._id}>

                            <Link to={`/similarCategories/${categorie._id}`}>
                                <div className="card w-[300px]  shadow-xl ">
                                    <figure className="px-6 pt-6">
                                        <img src={categorie.image} className="rounded-xl" />
                                    </figure>
                                    <div className="card-body ">
                                        <h2 className="card-title">{categorie.itemName}</h2>
                                        <div className="flex items-center justify-between">

                                            <p className="text-xl font-bold">{categorie.price} tk</p>
                                            <p className="text-xl font-bold text-right text-[#4F95FF]">Stock: {categorie.stockStatus}</p>

                                        </div>

                                        <div className="flex items-center gap-2">
                                            <FaStar />
                                            <p>{categorie.rating}</p>
                                        </div>

                                        <hr className="bg-[#D1D1D1] mt-3 mb-3" />

                                       
                                    </div>
                                </div>
                            </Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Categories;