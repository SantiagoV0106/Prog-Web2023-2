import './slogan.css'
// Icons
import { FaSquareFull } from "react-icons/fa";

export function Slogan() {
    return (
        <section className="slogan-container">

            <h1 className='title'>
                User First,
                <span>
                    <span className='effect-container'>
                        Design
                        <FaSquareFull id='square-icon'/>
                        <FaSquareFull id='square-icon-2'/>
                        <FaSquareFull id='square-icon-3'/>
                        <FaSquareFull id='square-icon-4'/>
                        <FaSquareFull id='square-icon-5'/>
                        <FaSquareFull id='square-icon-6'/>

                    <img src="/ArrowIcon.svg" alt="Arrow Icon" />

                    </span>
                    <span className='always-container'>
                        Always
                        <img className='pixel-logo' src="/pixelLogo.svg" alt="Pixel Logo" />
                    </span>
                </span>
            </h1>
            <div className="sub-container">
                <h2 className='sub-title'>
                    Unlock the Power of Design with Our Agency
                </h2>
                <p className='p-info' >
                    At <b>PixelPerfect</b>, we're more than just a design agency; 
                    we're your partners in creating <b>exceptional</b> web experiences.
                </p>
            </div>

            <button className='landing-button'>
                <img src="/PixelPerfect.svg" alt="PixelPerfect Logo" />
            </button>


        </section>
    )
}