import { Typewriter } from 'react-simple-typewriter'

const Popular = () => {
    return (
        <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1 font-semibold">

            <p className="mb-10 font-bold text-3xl text-center ">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                <div className="bg-[#D9D9D9] rounded-xl ">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co/kqD6f9K/353916793-249970294426807-4451598891261957386-n.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>
                <div className="bg-[#D9D9D9] rounded-xl ">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co/yk1wz3b/436986258-798510442162064-7164722731068788277-n.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>
                <div className="bg-[#D9D9D9] rounded-xl">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co/hsfnKX8/385524991-324124630386814-490333696148519164-n.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>
                <div className="bg-[#D9D9D9] rounded-xl justify-center">
                    <img className="h-[270px] w-[250px] rounded-t-xl" src="https://i.ibb.co/TbCxf7r/361543682-634210018673836-4282878231442221567-n.jpg" alt="" />
                    <p className="mt-4 mb-4 text-center">Most famous</p>
                </div>





            </div>
        </div>
    );
};

export default Popular;