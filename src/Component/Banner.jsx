import 'animate.css';
const Banner = () => {
    return (
        <div className=' '>

            <div className="carousel w-full lg:h-[600px] md:h-[500px] h-[400px]">
                <div id="slide1" className="carousel-item relative w-full lg:h-[600px] md:h-[500px] h-[400px]">
                    <div className="w-full lg:h-[600px] md:h-[500px] h-[400px] relative">
                        <img src="https://i.ibb.co.com/bdJCYcY/emre-han-akcay-Q53-Z8-OP6f0-unsplash.jpg" className="w-full lg:h-[600px] md:h-[500px] h-[400px]" />
                        <div className="absolute md:w-[50%] text-white md:left-1/4 top-1/3 text-center transform -translate-y-1/3 animate__animated animate__backInRight">
                            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold ">Unlock Your Inner Artist</h1>
                            <p className="mt-5 lg:text-3xl md:text-xl">Discover the joy of painting and creativity. Join our community of artists and let your imagination run wild</p>

                            <div className="flex justify-center mt-10">
                                <p className=" border lg:px-6 lg:py-3 px-4 py-2 font-medium rounded-3xl bg-[#16325B] text-white link link-hover">Explore now</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 md:left-5 md:right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full lg:h-[600px] md:h-[500px] h-[400px]">
                    <div className="w-full lg:h-[600px] md:h-[500px] h-[400px] relative">
                        <img src="https://i.ibb.co.com/Jc6pQ7Z/liam-heywood-anyes-IPWPY-unsplash.jpg" className="w-full lg:h-[600px] md:h-[500px] h-[400px]" />
                        <div className="absolute md:w-[50%] text-white md:left-1/4 top-1/2 md:top-1/3 text-center transform -translate-y-1/3 ">
                            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold ">Unlock Your Inner Artist</h1>
                            <p className="mt-5 lg:text-3xl md:text-xl">Discover the joy of painting and creativity. Join our community of artists and let your imagination run wild</p>

                            <div className="flex justify-center mt-10">
                                <p className=" border lg:px-6 lg:py-3 px-4 py-2 font-medium rounded-3xl bg-[#16325B] text-white link link-hover">Explore now</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 md:left-5 md:right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full lg:h-[600px] md:h-[500px] h-[400px]">
                    <div className="w-full lg:h-[600px] md:h-[500px] h-[400px] relative">
                        <img src="https://i.ibb.co.com/kH0fGZ4/debabrata-dash-R6-Cu-Frk-Ocl-I-unsplash.jpg" className="w-full lg:h-[600px] md:h-[500px] h-[400px]" />
                        <div className="absolute md:w-[50%] text-white md:text-black md:left-1/4 top-1/2 md:top-1/3 text-center transform -translate-y-1/3 ">
                            <h1 className="lg:text-5xl md:text-3xl text-xl font-bold ">Unlock Your Inner Artist</h1>
                            <p className="mt-5 lg:text-3xl md:text-xl">Discover the joy of painting and creativity. Join our community of artists and let your imagination run wild</p>

                            <div className="flex justify-center mt-10">
                                <p className=" border lg:px-6 lg:py-3 px-4 py-2 font-medium rounded-3xl bg-[#16325B] text-white link link-hover">Explore now</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 right-1 md:left-5 md:right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;