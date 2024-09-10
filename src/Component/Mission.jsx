import { MdOutlineArrowOutward } from "react-icons/md";

const Mission = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 gap-5 md:flex  ">
            <div className="md:w-[40%] p-5 md:p-0">
                <button className="btn bg-[#FFFFF5] py-[11px] px-6 rounded-3xl text-[#020043] mb-4 mt-80 md:mt-0">Who we are</button>

                <p className="text-4xl font-semibold text-white mb-4 mt-10 md:mt-0">We Help You Unlock Your Creative Potential</p>
                <p className="text-white text-[16px]">At Rangdhanu Academy, we believe that every individual has an artist within. Our mission is to provide a nurturing environment where creativity flourishes, offering a platform for students of all ages to explore, learn, and grow their artistic skills. Whether you're a beginner or an experienced artist, our academy is dedicated to helping you enhance your talent with expert guidance, personalized support, and inspiring classes that push the boundaries of creativity.
                    <br />
                    Join us on a journey where imagination meets skill, and where every student finds their unique artistic voice.</p>

                <button className="btn text-[16px] bg-[#16325B] border-none text-white rounded-xl py-3 pl-6 pr-4 mt-16 font-medium">Learn more <MdOutlineArrowOutward className="text-white " /></button>

            </div>
            <div className="md:w-[60%] h-[500px] relative  ">

                <div className="flex justify-end">
                    <img className="rounded-3xl h-[400px]" src="https://i.ibb.co.com/sW4pjRz/pexels-olly-933255.jpg" alt="" />
                </div>

                <div className="py-[47px] absolute bottom-1 pl-[30px] pr-5 rounded-[32px] bg-[#343268] w-[380px] h-[210px]">
                    <p className="font-medium text-[26px] text-[#FFFFFF] mb-5">Our mission is simple</p>
                    <p className="text-[#FFFFFFCC] text-[16px]">To foster creativity and inspire artistic growth by providing high-quality, hands-on art education. </p>

                </div>



            </div>
        </div>
    );
};

export default Mission;