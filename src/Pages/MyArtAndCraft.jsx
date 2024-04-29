import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { FaPen, FaStar } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyArtAndCraft = () => {
    const items = useLoaderData();
    const { user } = useContext(AuthContext);


    const item = items.filter(item => item.email === user.email);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://rangdhanu-art-server.vercel.app/item/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[100px] pb-10 text-black '>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">My Art and Craft</h1>
            </div>
            <div >
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#3EA570] text-white border-none ">Customization</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52">
                        <li><a>Yes</a></li>
                        <li><a>No</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-6 justify-center flex-wrap mt-5">
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

                                        <p className=" text-[#4F95FF] text-right">Stock: {data.stockStatus}</p>

                                    </div>


                                    <div className="flex justify-between">
                                        <p>Customization: {data.customization}</p>
                                        <div className="flex items-center gap-2">
                                            <FaStar />
                                            <p>{data.rating}</p>
                                        </div>



                                    </div>
                                    <hr className="bg-[#D1D1D1] mt-3 mb-3" />

                                    <div className="flex justify-evenly">
                                        <Link to={`updateCraft/${data._id}`}><button className="btn bg-[#EBFBE5] text-xl border-[#3EA570] text-[#3EA570]"><FaPen /></button></Link>

                                        <button onClick={() => handleDelete(data._id)} className="btn bg-red-500 text-xl border-none text-white"><MdDelete /></button>
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

export default MyArtAndCraft;