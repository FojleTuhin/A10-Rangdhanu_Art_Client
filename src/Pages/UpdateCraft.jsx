import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {

    const item = useLoaderData();
    const {
        _id,
        itemName,
        subcategory,
        image,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        description,
        
    }= item;

    const handleUpdateItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.name.value;
        const subcategory = form.subcategory.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
        const description = form.description.value;
        

        const updatedItem = {
            itemName,
            subcategory,
            image,
            price,
            rating,
            customization,
            processing_time,
            stockStatus,
            description,
           
        }

        

        //send data to the server
        fetch(`https://rangdhanu-art-server.vercel.app/item/${_id}`,{
            method: 'PuT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedItem)
        })

        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

        form.reset();
    }
   
   

    return (
        <div>
            <div className="px-4 md:px-8 lg:px-[100px]  pb-1 bg-[#F8F6F1] ">
            <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">Update Art and Craft</h1>
            </div>
            <form onSubmit={handleUpdateItem}>
                {/* 1st div */}
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Item_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" required defaultValue={itemName} placeholder="Item Name" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Subcategory_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" required defaultValue={subcategory} placeholder="Subcategory_name" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                </div>
                {/* 2nd div */}
                <div className="md:flex mb-8 gap-4 ">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" required defaultValue={image} placeholder="Image URL" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" required defaultValue={price} placeholder="Price" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                </div>
                {/* 3rd div */}
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" required defaultValue={rating} placeholder="Rating" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" required defaultValue={customization} placeholder="Yes or No" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                </div>
                {/* 4th div */}
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Processing_time</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="processing_time" required defaultValue={processing_time} placeholder="processing_time" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Stock_status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" required defaultValue={stockStatus} placeholder="Yes or No" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                </div>
                {/* 5th div */}
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-black font-bold">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" required defaultValue={description} placeholder="Description" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>

                </div>
                
                <div className="md:flex mb-8 ">
                    <button className="btn bg-[#3EA570] border-none text-white w-1/2 justify-center m-auto">Update Craft</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UpdateCraft;