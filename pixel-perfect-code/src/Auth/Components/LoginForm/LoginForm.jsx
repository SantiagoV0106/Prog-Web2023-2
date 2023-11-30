import { useAuth } from '../../hooks/useAuth'

//Styles
import './loginform.css'

export function LoginForm() {

    const {
        handleEmailChange,
        handleOnSubmit,
        handlePasswordChange,
        email,
        password } = useAuth()


    // tester@gmail.com tester123

    return (
        <main className='login-container'>
            <div className="left-container">
                <img src="/PixelPerfect.svg" alt="PixelPerfect Logo" />
                <span>
                    Welcome Back Designer!
                </span>
                <h2 className='login-title'>
                    Log In
                </h2>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        className='input-login'
                        onChange={handleEmailChange}
                        value={email} />

                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        className='input-login'
                        onChange={handlePasswordChange}
                        value={password} />

                    <span id='forgot-pass'>Forgot my password</span>
                    <button
                        className='button-submit'
                        type="submit">
                        Continue to PixelPerfect
                    </button>
                </form>
            </div>
            <div className="right-container">
                <img src="/pixelLogo.svg" alt="Pixel Logo" />
            </div>
        </main>
    )
}