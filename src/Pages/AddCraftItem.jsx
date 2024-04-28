import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import Swal from "sweetalert2";

const AddCraftItem = () => {

    const { user } = useContext(AuthContext);

    const handleAddItem = (e) => {
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
        const userName = user.displayName;
        const email = user.email;

        const newItem = {
            itemName,
            subcategory,
            image,
            price,
            rating,
            customization,
            processing_time,
            stockStatus,
            description,
            userName,
            email
        }

        console.log(newItem);
        //send data to the server
        fetch('http://localhost:5000/item',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newItem)
        })

        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your craft has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

        form.reset();
    }

    return (
        <div className="px-4 md:px-8 lg:px-[100px]  pb-1 bg-[#F8F6F1] ">
             <div className="bg-[#EBFBE5] text-[#3EA570] py-4">
                <h1 className="font-bold text-xl text-center">Add Art and Craft</h1>
            </div>
            <form onSubmit={handleAddItem}>
                {/* 1st div */}
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Item_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" required  placeholder="Item Name" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Subcategory_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" required placeholder="Subcategory_name" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="text" name="image" required placeholder="Image URL" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" required placeholder="Price" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="number" name="rating" required placeholder="Rating" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" required placeholder="Yes or No" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="date" name="processing_time" required placeholder="processing_time" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Stock_status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" required placeholder="Yes or No" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="text" name="description" required placeholder="Description" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>

                </div>
                
                <div className="md:flex mb-8 ">
                    <button className="btn bg-[#3EA570] border-none text-white w-1/2 justify-center m-auto">Add item</button>
                </div>
            </form>
        </div>
    );
};

export default AddCraftItem;