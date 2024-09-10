
const Testimonial = () => {
    return (
        <div className="max-w-6xl px-4 md:px-8 mx-auto mt-20 mb-20">
            <button className="btn bg-[#FBFBFB] py-[10px] px-6 rounded-3xl text-[#020043] mb-4 ">Testimonial</button>
            <p className="text-4xl font-semibold mb-[30px] text-[#020043]">Hear What Our Students Say
            </p>

            <div className="flex flex-col gap-[35px] text-center">
                {/* <div>
                    
                    <h3 className="text-white w-[60%] mx-auto text-[20px] font-semibold text-center pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero magnam quia repellendus cupiditate nihil consectetur placeat corporis est. Laboriosam.</h3>
                </div> */}
                <div className="flex flex-wrap gap-8 justify-center ">

                    <div className="bg-[#16325B] text-white py-8 w-[280px] md:w-[330px] md:h-[420px] lg:w-[450px]   p-8 rounded-b-full hover:rounded-b-[0px] hover:rounded-t-full">
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" checked="checked" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                        </div>
                        <p className="text-[18px]  my-7">Joining Rangdhanu Academy has been a transformative experience for me. The instructors are incredibly supportive, and the environment encourages creativity. I've learned new techniques and gained the confidence to pursue my passion for art!</p>
                        <div className="">
                            <div className="flex justify-center">
                                <img className="rounded-full h-12 w-12 " src="https://i.ibb.co/Hz0jFN0/pexels-italo-melo-881954-2379004.jpg" alt="" />
                            </div>

                            <h3 className=" text-[20px] font-semibold">Tony Stark</h3>
                            <p className="">Student</p>
                        </div>
                    </div>
                    <div className="bg-[#16325B] text-white py-8 w-[280px] md:w-[330px] md:h-[420px] lg:w-[450px]  p-8 mt-10 md:mt-0 rounded-b-full hover:rounded-b-[0px] hover:rounded-t-full">
                        <div className="rating ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" checked="checked" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FEC84B]" />
                        </div>
                        <p className="text-[18px]  py-7 ">Rangdhanu is a place where I feel free to express myself. The teachers are patient and knowledgeable, guiding me step by step. I've learned so much, and my artwork has improved tremendously!</p>
                        <div className="">
                            <div className="flex justify-center">
                                <img className="rounded-full h-12 w-12 " src="https://i.ibb.co/wwQ4nGW/pexels-nkhajotia-1516680.jpg" alt="" />
                            </div>

                            <h3 className=" text-[20px] font-semibold">Tony Stark</h3>
                            <p className="">Student</p>
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