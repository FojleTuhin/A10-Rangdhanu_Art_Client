import { Typewriter } from 'react-simple-typewriter'

const Popular = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1 font-semibold">



            <button className="btn bg-[#FBFBFB] py-[10px] px-6 rounded-3xl text-[#020043] mb-4 ">Popular Art and craft</button>
            <p className="text-4xl font-semibold mb-[100px] text-[#020043]">See our popular painting</p>

            <div className="flex group justify-center items-center gap-4 hover:gap-8 flex-wrap">
                <div className="bg-[#16325B] w-[250px] h-[323px] rounded-xl text-white">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/KLfX4P1/pexels-steve-1606591.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-col gap-4 group-hover:gap-8'>
                    <div className="bg-[#16325B] w-[250px] h-[323px] rounded-xl text-white ">
                        <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/m4ChDJ6/pexels-iriser-1005711.jpg" alt="" />
                        <p className="mt-4 mb-4 text-center">Most famous</p>
                    </div>
                    <div className="bg-[#16325B] w-[250px] h-[323px] rounded-xl text-white">
                        <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/wyJvtqY/tony-litvyak-Gs9-Z3r2-Yi0-Q-unsplash.jpg" alt="" />
                        <p className="mt-4 mb-4 text-center">Most famous</p>
                    </div>
                </div>
                <div className="bg-[#16325B] w-[250px] h-[323px] rounded-xl text-white">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/YTm41f4/pexels-w-w-299285-889839.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>





            </div>
        </div>
    );
};

export default Popular;