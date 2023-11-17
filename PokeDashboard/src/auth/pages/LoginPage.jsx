import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

export function LoginPage() {   
    const { formState, handleOnChange, handleSubmit } = useForm()
    const {islogged} = useAuth()

    if (islogged) {
        return(
            <Navigate to='/'/>
        )
    }
   


    return (
        <div className="login-container">
            <div className="glass-effect-container">
                <div className="img-container">
                <img src="/poke-logo.png" alt="poke-logo" />
                </div>
            
                    <form className="form-container" onSubmit={handleSubmit}>

                        <div className="input-container">
                            <label
                                htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                onChange={handleOnChange}
                                value={formState.email} />
                        </div>
                        <div className="input-container">
                            <label
                                htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Your password"
                                onChange={handleOnChange}
                                value={formState.password} />
                        </div>

                        <div className="end-container">
                        <button type="submit">Log in</button>
                        <p>Don`t have an account? <b>Sing up</b> </p>
                        <p>Forgot password?</p>
                        </div>
                    </form>
            </div>
        </div>
    )
}