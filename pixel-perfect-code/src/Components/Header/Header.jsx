import './header.css'
import headerNavLinks from '../../const/headerNavLinks'


export function Header() {

    return (
        <header className='header-container'>
            <div className='logo-container'>
                <img src='/PixelPerfectLogoFull.svg' alt="Logo Image" />
            </div>
            <nav className='nav-container'>
                <ul className='link-list'>
                    {
                        headerNavLinks.map(({id, title}) => {
                            return (
                                <li key={id} className='links'>
                                    {title}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}