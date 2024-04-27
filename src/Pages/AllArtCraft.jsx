import { useContext } from "react";
import { AuthContext } from "../Firebase/FirebaseProvider";
import { Tooltip } from "react-tooltip";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllArtCraft = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {

        logOut()
            .then(result => {
                console.log(result);
            })
            .catch()
    }
    return (

        <div className="ml-20">
            {/* {
                user && <div className="tooltip" data-tip={user.displayName}>
                    <img className="w-12 h-12 border border-black mr-3 rounded-full" src={user.photoURL} />
                </div>
            }



            {
                user && <div >
                    <a id="not-clickable"><img className="w-12 h-12 border border-black mr-3 rounded-full" src={user.photoURL} /></a>
            
                    
                    <Tooltip anchorSelect="#clickable" clickable>
                        <button>You can click me!</button>
                    </Tooltip>
                </div>
            } */}



            {/* {
                user && <div>
                <a id="clickable"><img className="w-12 h-12 border border-black mr-3 rounded-full" src={user.photoURL} /></a>
                <Tooltip anchorSelect="#clickable" clickable>
                    <button>You can click me!</button>
                    <Link> <a onClick={handleSignOut} className=" border border-black flex gap-2 justify-center items-center px-6 py-3 font-medium rounded-3xl"><FaRegUser /> Sign out</a></Link>
                </Tooltip>
            </div>
            } */}
        </div>
    );
};

export default AllArtCraft;