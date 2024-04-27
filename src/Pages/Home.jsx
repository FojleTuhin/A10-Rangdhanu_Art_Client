import { useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import Card from "../Component/Card";
import Popular from "../Component/Popular";
import Purchase from "../Component/Purchase";

const Home = () => {

    const items =useLoaderData();
    return (
        <div >
            


            <Banner></Banner>
            <div className="px-4 md:px-8 lg:px-[100px] pt-10 pb-1">
                
                <p className="text-2xl font-medium mb-7">Craft item : {items.length}</p>
                <div className="flex gap-6 justify-center flex-wrap">
                    {
                        items.slice(0,6).map(item=><Card key={item._id} item={item}></Card>)
                    }
                </div>

            </div>
            <Popular></Popular>
            <Purchase></Purchase>

        </div>
    );
};

export default Home;