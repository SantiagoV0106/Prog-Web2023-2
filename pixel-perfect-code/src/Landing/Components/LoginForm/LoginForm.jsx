import { Link } from 'react-router-dom'
import { Inputs } from '../Inputs/Inputs'
import './loginform.css'

export function LoginForm() {
    return (
        <main className='login-container'>
            <div className="left-container">
                <img src="/PixelPerfect.svg" alt="PixelPerfect Logo" />
                <span>
                    Welcome Back Designer!
                </span>
                <h2>
                    Log In
                </h2>
                <form>
                   <Inputs type='text' placeholder='Email' />
                   <Inputs type='password' placeholder='Password'/>
                    <span>Forgot my password</span>
                    <Link to='/upload' >
                    <button className='button-submit' type="submit">Continue to PixelPerfect</button>
                    </Link>
                </form>
            </div>
                <div className="right-container">
                    <img src="/pixelLogo.svg" alt="Pixel Logo" />
                </div>
        </main>
    )
}