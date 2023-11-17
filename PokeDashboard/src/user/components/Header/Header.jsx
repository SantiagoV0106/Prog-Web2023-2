import { useHeader } from '../../hooks/useHeader'
import { HiOutlineLogout } from "react-icons/hi";
import './header.css'


export function Header() {

    const { handleOnClick } = useHeader()

    return (
        <header id='header'>
            <div className="logo-container">
                <img
                    src="/poke-logo.png"
                    alt="Poke-Logo" />
            </div>
            <div className="user-container">
                <p className="user">
                    Master34
                </p>
                <div className="user-img-contianer">
                    <img src="/user.png" alt="user-img" />
                </div>
                <div className="log-out-contianer">
                    <button id='header-button' onClick={handleOnClick}>

                        Log Out
                        <span>
                        <HiOutlineLogout />
                        </span>

                    </button>
                </div>
            </div>
        </header>
    )
}