import Banner from "../Component/Banner";
import Popular from "../Component/Popular";
import Purchase from "../Component/Purchase";
import Categories from "../Component/Categories";
import CraftItem from "../Component/CraftItem";
import Testimonial from "../Component/Testimonial";
import Carousel from "../Component/Carousel";
import Faq from "../Component/Faq";


const Home = () => {

   

    

    return (
        <div >



            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                
                <CraftItem></CraftItem>
                <Carousel></Carousel>
                <Popular></Popular>
                <Categories></Categories>
                <Purchase></Purchase>
                <Testimonial></Testimonial>
                <Faq></Faq>
            </div>

        </div>
    );
};

export default Home;