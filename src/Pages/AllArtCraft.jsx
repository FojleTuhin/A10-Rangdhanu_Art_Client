import { Link, useLoaderData } from "react-router-dom";


const AllArtCraft = () => {

    const items = useLoaderData();
    return (

        <div className='bg-[#F8F6F1] px-4 md:px-8 lg:px-[100px] pb-10 pt-16 text-black'>
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">All Art and Craft</h1>
            </div>


            <div className="overflow-x-auto mt-5">
                <table className="table table-xs md:table-md">
                    {/* head */}
                    <thead>
                        <tr className="text-[#3EA570] font-bold md:text-xl">
                            <th>Image</th>
                            <th>Subcategories</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item=>
                                <tr key={item._id}>
                                <td><img className="h-[70px] md:h-[200px]" src={item.image} alt="" /></td>
                                <td className="md:font-bold">{item.subcategory}</td>
                                <td className="md:font-bold">{item.price} tk</td>
                                <td className="md:font-bold">{item.rating}</td>
                                <td><Link to={`viewDetails/${item._id}`}><button className="btn btn-sm md:btn-md bg-[#3EA570] border-none text-white">View details</button></Link></td>
                            </tr>)
                        }
                    </tbody>



                </table>
            </div>



        </div>
    );
};

export default AllArtCraft;