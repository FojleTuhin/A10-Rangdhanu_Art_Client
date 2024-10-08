import { useContext } from 'react';
import { AuthContext } from '../Firebase/FirebaseProvider';
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {

        logOut()
            .then(result => {
                console.log(result);
            })
            .catch()
    }



    const links = <>
        <Link to='/'><li><a className="font-medium text-[18px] text-black  link link-hover">Home</a></li></Link>
        <Link to='/allArtCraft'><li><a className="font-medium text-[18px] text-black  link link-hover">All Art & craft</a></li></Link>

        {
            user && <Link to='/AddCraft'><li><a className="font-medium text-[18px] text-black  link link-hover">Add Craft</a></li></Link>
        }
        {
            user && <Link to='/MyArtAndCraft'><li><a className="font-medium text-[18px] text-black  link link-hover">My Art&Craft</a></li></Link>
        }

    </>
    return (
        <div className=" bg-white  w-full z-20 ">
            <div className="navbar lg:px-[100px] fixed z-10 mx-auto px-4 md:px-8 bg-opacity-80  bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-white text-black bg-opacity-80 rounded-box w-52 pt-5">
                            {links}


                            {
                                user ?

                                    <div className='z-40 mt-5 mb-5 w-12 h-18'>
                                        <a id="clickable"><img className="w-12 h-12 border border-black mr-3 rounded-full" src={user.photoURL} /></a>
                                        <Tooltip anchorSelect="#clickable" clickable>
                                            <button className='text-center mb-1 font-bold m-auto'>{user.displayName}</button>
                                            <Link> <a onClick={handleSignOut} className=" border border-black flex gap-2 justify-center items-center px-4 py-2 font-medium rounded-3xl"><FaRegUser /> Sign out</a></Link>
                                        </Tooltip>
                                    </div>
                                    :
                                    <div className='md:flex gap-2 mt-4'>
                                        <Link to='/login'> <a className=" border border-white md:border-black text-white md:text-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl bg-[#16325B]"><FaRegUser /> Login</a></Link>

                                    </div>
                            }

                        </ul>
                    </div>

                    <div className="flex items-center">
                        <img src="https://i.ibb.co/7zDTKyp/Group-1000004335.png" alt="" />
                        <Link to='/'><a className="btn btn-ghost text-xl font-bold">Rangdhanu</a></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>


                </div>
                <div className="navbar-end max-sm:hidden">





                    {
                        user ?

                            <div className='z-40'>
                                <a id="clickable"><img className="w-12 h-12 border border-black mr-3 rounded-full" src={user.photoURL} /></a>
                                <Tooltip anchorSelect="#clickable" clickable>
                                    <button className='font-bold mb-4'>{user.displayName}</button>
                                    <Link> <a onClick={handleSignOut} className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Sign out</a></Link>
                                </Tooltip>
                            </div>
                            :
                            <div className='flex gap-2'>
                                <Link to='/login'> <a className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl bg-[#16325B] text-white"><FaRegUser /> Login</a></Link>
                                {/* <Link to='/register' className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser />Sign up</Link> */}
                            </div>
                    }


                </div>




            </div>

            {/* <hr className=" border-black" /> */}
        </div>
    );
};

export default Navbar;