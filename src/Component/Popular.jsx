import { Typewriter } from 'react-simple-typewriter'

const Popular = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1 font-semibold">

            <p className="mb-10 font-bold text-3xl text-center text-white">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                        'Popular Art and craft',
                    ]}
                />
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-4">
                <div  className="bg-[#D9D9D9] rounded-xl ">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/KLfX4P1/pexels-steve-1606591.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>
                <div  className="bg-[#D9D9D9] rounded-xl ">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/m4ChDJ6/pexels-iriser-1005711.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>
                <div  className="bg-[#D9D9D9] rounded-xl">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/wyJvtqY/tony-litvyak-Gs9-Z3r2-Yi0-Q-unsplash.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>
                <div  className="bg-[#D9D9D9] rounded-xl justify-center">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co.com/YTm41f4/pexels-w-w-299285-889839.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>





            </div>
        </div>
    );
};

export default Popular;