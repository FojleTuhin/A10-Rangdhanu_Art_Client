import Banner from "../Component/Banner";
import Popular from "../Component/Popular";
import Purchase from "../Component/Purchase";
import Categories from "../Component/Categories";
import CraftItem from "../Component/CraftItem";


const Home = () => {

   

    

    return (
        <div >



            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                
                <CraftItem></CraftItem>
                <Categories></Categories>
                <Popular></Popular>
                <Purchase></Purchase>
            </div>

        </div>
    );
};

export default Home;