import './header.css'


export function Header() {
    return(
        <header id='header'>
            <div className="logo-container">
                <img 
                src="/poke-logo.png" 
                alt="Poke-Logo" />
            </div>
            <div className="user-container">
                <p className="user">
                    Master 34
                </p>
                <div className="user-img-contianer">
                    <img src="/user.png" alt="user-img" />
                </div>
                <div className="log-out-contianer">
                    <button>
                        Log out
                    </button>
                </div>
            </div>
        </header>
    )
}