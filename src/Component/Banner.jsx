
const Banner = () => {
    return (
        <div className=' pb-10'>
            <div className='flex justify-end'>

            </div>
            <div className="carousel w-full h-[500px] mt-5">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QfBG9Kz/8v4edhsy3j1b1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/JzTsHVM/forest-landscape-mardare-constantin-cristi.jpg
" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QMkyTj5/360-F-548630653-h-QO3u-Dwz-J8-Ac-KUh-Q3g-MSGy29-Are-Vcb-Hr.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;