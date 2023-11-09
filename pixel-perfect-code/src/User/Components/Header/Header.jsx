import headerNavLinks from '../../../ui/const/headerNavLinks'
import { NavLink } from 'react-router-dom'
import './header.css'


export function Header() {

    return (
        <header className='header-container'>
            <div className='logo-container'>
                <img src='/PixelPerfectLogoFull.svg' alt="Logo Image" />
            </div>
            <nav className='nav-container'>
                <ul className='link-list'>
                    {
                        headerNavLinks.map(({ id, title, path }) => {
                            return (
                                <li key={id} className='links'>
                                    <NavLink to={path}>
                                        {title}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}