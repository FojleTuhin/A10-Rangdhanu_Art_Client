import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Root = () => {
    return (
        <div className="bg-[url('https://i.ibb.co.com/jgn8z3w/flat-mountains.png')]  bg-cover bg-center bg-no-repeat bg-fixed ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;