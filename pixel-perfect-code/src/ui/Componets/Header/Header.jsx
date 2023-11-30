import headerNavLinks from "../../const/headerNavLinks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAuth } from "../../../Auth/hooks/useAuth";
// Icons
import { HiMiniBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
// Styles
import './header.css'


export function Header() {

    const [active, setActive] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const {handleLogOut} = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.pathname);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logoImage = windowWidth <= 425 ? '/pixelLogo.svg' : '/PixelPerfect.svg';

    const handleOnClick = () => {
        // Intercambia el estado
        setActive(!active)
    }


    return (
        <header className='header-container'>
            <div className='logo-container'>
                <img src={windowWidth >= 769 ? '/PixelPerfectLogoFull.svg' : logoImage}  alt="Logo Image" onClick={()=> navigate('/')} />
            </div>

            <div className={`links-container ${active ? 'active' : ''} ${ location.pathname === '/admin/upload' ? 'hidden' : ''}  `}>

                {
                    headerNavLinks.map(({id, title, path})=> {
                        return(
                            <Link key={id} to={path} onClick={handleOnClick} > {title} </Link>
                        )
                    })
                }
            </div>
            <button
                onClick={handleOnClick}
                className={`nav-btn ${active ? 'active' : ''}`}
                type="button" >
                <HiMiniBars3 />
            </button>
            <button
                onClick={handleOnClick}
                className={`nav-close-btn ${active ? 'active' : ''}`}
                type="button" >
                <IoCloseOutline/>
            </button>
            <div className={`initial ${active ? 'active' : ''} `}></div>
            <button onClick={handleLogOut} className={ `logout-btn ${location.pathname === '/admin/upload'? 'show' : ''} ` } >Log Out</button>
        </header>
    )
}