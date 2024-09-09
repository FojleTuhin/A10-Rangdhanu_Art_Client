
const Testimonial = () => {
    return (
        <div className="max-w-7xl md:px-8 mx-auto mt-20 mb-20">

            <div className="flex flex-col gap-[35px] text-center">
                <div>
                    <h3 className="text-white text-[40px] font-bold text-center pb-2">Testimonials</h3>
                    <h3 className="text-white w-[60%] mx-auto text-[20px] font-semibold text-center pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero magnam quia repellendus cupiditate nihil consectetur placeat corporis est. Laboriosam.</h3>
                </div>
                <div className="lg:flex pl-6 md:ml-0 gap-8 justify-center">

                    <div className="bg-[#16325B] text-white py-8 w-[330px] h-[420px] md:w-[450px] md:h-[364px]  p-8 rounded-b-full hover:rounded-b-[0px] hover:rounded-t-full">
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" checked="checked" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                        </div>
                        <p className="text-[18px]  my-7">"The level Of the secuirity provided by Cypherplay is
                            unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace
                            of mind I wos looking for."</p>
                        <div className="">
                            <div className="flex justify-center">
                                <img className="rounded-full h-12 w-12 " src="https://i.ibb.co/Hz0jFN0/pexels-italo-melo-881954-2379004.jpg" alt="" />
                            </div>

                            <h3 className=" text-[20px] font-semibold">Tony Stark</h3>
                            <p className="">Marketing Manager, XYZ</p>
                        </div>
                    </div>
                    <div className="bg-[#16325B] text-white py-8 w-[330px] h-[420px] md:w-[450px] md:h-[364px]  p-8 mt-10 lg:mt-0 rounded-b-full hover:rounded-b-[0px] hover:rounded-t-full">
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" checked="checked" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                        </div>
                        <p className="text-[18px]  py-7 ">"The level Of the secuirity provided by Cypherplay is
                            unmatched. I feel confident using my card for both everyday purchases and travel. It's the peace
                            of mind I wos looking for."</p>
                        <div className="">
                            <div className="flex justify-center">
                                <img className="rounded-full h-12 w-12 " src="https://i.ibb.co/wwQ4nGW/pexels-nkhajotia-1516680.jpg" alt="" />
                            </div>

                            <h3 className=" text-[20px] font-semibold">Tony Stark</h3>
                            <p className="">Marketing Manager, XYZ</p>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2 justify-center mt-5 ">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded-full"></div>
                </div>
            </div>




        </div>
    );
};

export default Testimonial;