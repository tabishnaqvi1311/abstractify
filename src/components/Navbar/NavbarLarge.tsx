import { Link } from 'react-router-dom'
import LoginModal from '../LoginModal/LoginModal'
import SignupModal from '../SignupModal/SignupModal'
import { useAuthContext } from '../../hooks/useAuthContext'

const NavbarLarge = () => {

    const { user, dispatch } = useAuthContext();

    const handleLogout = async() => {
        localStorage.removeItem("userId");
        localStorage.removeItem("auth-token");
        dispatch({type: "LOGOUT"});
    }   

    return (
        <>
            <nav className='lg:flex hidden justify-between items-center bg-gray-900 py-4 px-10 shadow-lg'>
                <div className='font-extrabold text-3xl text-purple-500'>
                    <Link to={"/"}>abstractify</Link>
                </div>
                <div className='flex gap-10 text-white'>
                    <Link to={"/feed"}>Feed</Link>
                    <Link to={"/seed"}>Create</Link>
                    {
                        !user ?
                        <>
                            <LoginModal />
                            <SignupModal />
                        </>
                        :
                        <button onClick={handleLogout}>Logout</button>
                    }
                    {/* <span>Profile</span> */}
                </div>
            </nav>
        </>
    )
}

export default NavbarLarge
