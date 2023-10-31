import { Footer, UploadForm } from "../Components";

export function UploadFilePage() {
    return(
        <>
         <header className='header-container'>
            <div className='logo-container'>
                <img src='/PixelPerfectLogoFull.svg' alt="Logo Image" />
            </div>
            </header>
        <UploadForm/>
        <Footer/>
        </>
    )
}