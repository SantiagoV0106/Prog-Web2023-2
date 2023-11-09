import { AuthContextProvider } from "../context/AuthContextProvider";
import { useForm } from "../hooks/useForm";

export function LoginPage() {

    const {formState,handleOnChange, handleSubmit} = useForm()

    return (
        <AuthContextProvider>
            <h1>Hola desde Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email"
                    name="email" id=""
                    onChange={handleOnChange}
                    value={formState.email} />

                <input type="password"
                    name="password"
                    onChange={handleOnChange}
                    value={formState.password} />

                <button type="submit">login</button>
            </form>
        </AuthContextProvider>
    )
}