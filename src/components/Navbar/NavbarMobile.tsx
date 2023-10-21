import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import {useState} from "react"
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';

const NavbarMobile = () => {

    const [toggle, setToggle] = useState<Boolean>(false);

    return (
        <>
            <nav className='flex lg:hidden justify-between items-center border py-4 px-10'>
                <div className='font-extrabold text-3xl text-orange-700'>
                    <Link to={"/"}>abstractify</Link>
                </div>
                <span onClick={() => setToggle(!toggle)}><GiHamburgerMenu size={25}/></span>
                <div className={` absolute top-20 right-10 bg-gray-900 gap-5 px-10 py-5 text-white flex-col ${toggle ? "flex" : "hidden"}`}>
                    <Link to={"/feed"}>Feed</Link>
                    <span>Create</span>
                    <LoginModal/>
                    <SignupModal/>
                    {/* <span>Profile</span> */}
                </div>
            </nav>
        </>
    )
}

export default NavbarMobile
