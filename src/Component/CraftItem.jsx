import { useLoaderData } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
import 'animate.css';
import Card from "./Card";

const CraftItem = () => {
    const items = useLoaderData();

    return (
        <div>
            <div className="px-4 md:px-8 lg:px-[100px] mt-20  pb-1">

                <p className="mb-10 font-bold text-3xl text-center text-white animate__animated animate__bounceInLeft">
                    {/* <Typewriter
                        cursor
                        cursorBlinking
                        delaySpeed={1000}
                        deleteSpeed={25}
                        loop={0}
                        typeSpeed={75}
                        words={[
                            'Art and Craft',
                        ]}
                    /> */}


                    {/* Art and Craft */}
                </p>


                <button className="btn bg-[#FBFBFB] py-[10px] px-6 rounded-3xl text-[#020043] mb-4 ">Art and Craft</button>
                <p className="text-4xl font-semibold mb-[50px] text-[#020043]">Frequntly Asked Question</p>
                <div>
                    <div className="flex gap-6 justify-center flex-wrap">
                        {
                            items.slice(0, 6).map(item => <Card key={item._id} item={item}></Card>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CraftItem;