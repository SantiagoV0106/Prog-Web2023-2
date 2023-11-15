import { UserContext } from "./UserContect";

export function UserContextProvider({children}) {


    return(
        <UserContext value={{
            number : 0
        }}>
            {children}
        </UserContext>
    )
}