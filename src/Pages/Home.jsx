import { useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import Card from "../Component/Card";
import Popular from "../Component/Popular";
import Purchase from "../Component/Purchase";
import { Typewriter } from "react-simple-typewriter";
import Categories from "../Component/Categories";

const Home = () => {

    const items =useLoaderData();
    return (
        <div className="">
            


            <Banner></Banner>
            <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1">
                
            <p className="mb-10 font-bold text-3xl text-center">
            <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                        'Art and Craft',
                    ]}
                />
            </p>
                <div className="flex gap-6 justify-center flex-wrap">
                    {
                        items.slice(0,6).map(item=><Card key={item._id} item={item}></Card>)
                    }
                </div>

            </div>
            <Categories></Categories>
            <Popular></Popular>
            <Purchase></Purchase>

        </div>
    );
};

export default Home;