
const AddCraftItem = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1 bg-[#F8F6F1] ">
            <p className="font-bold text-xl text-center text-black mb-8">Add item</p>
            <form>
                    {/* 1st div */}
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Item_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Item Name" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Subcategory_name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory" placeholder="Subcategory_name" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="price" placeholder="Price" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" placeholder="Yes or No" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="date" name="processing_time" placeholder="processing_time" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Stock_status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" placeholder="In stock or not" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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
                            <input type="name" name="description" placeholder="Description" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    
                </div>
                    {/* 6th div */}
                <div className="md:flex mb-8 gap-4 ">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">User name</span>
                        </label>
                        <label className="input-group">
                            <input type="name" name="User name" placeholder="User name" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-black font-bold">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="Email" placeholder="info@gmail.com" className="input input-bordered w-full bg-none bg-[#f4f3f0] text-black border-black" />
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