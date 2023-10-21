import { Link } from 'react-router-dom'
import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'

const NavbarLarge = () => {
    return (
        <>
            <nav className='lg:flex hidden justify-between items-center border py-4 px-10'>
                <div className='font-extrabold text-3xl text-orange-700'>
                    <Link to={"/"}>abstractify</Link>
                </div>
                <div className='flex gap-10'>
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

export default NavbarLarge
