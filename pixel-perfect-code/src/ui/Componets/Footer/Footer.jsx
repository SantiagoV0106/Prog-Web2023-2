// Icons
import { PiFacebookLogoLight, PiInstagramLogoLight  } from "react-icons/pi";

import './footer.css'

export function Footer() {
    return (
        <footer id='footer'>
            <div className="deco-line"></div>
            <p>PixelPerfect 2023 <span>Legal advise | Cookies policy</span> </p>
            <div className="accounts-container">
                <PiFacebookLogoLight className="account-icon" />
                <PiInstagramLogoLight className="account-icon" />
            </div>
        </footer>
    )
}