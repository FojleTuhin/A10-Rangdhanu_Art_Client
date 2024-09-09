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


                    Art and Craft
                </p>
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