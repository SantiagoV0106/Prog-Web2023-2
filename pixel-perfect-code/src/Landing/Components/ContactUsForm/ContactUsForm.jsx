import { Inputs } from '../Inputs/Inputs'
import './contactusform.css'

export function ContactUsForm() {
    return(
        <main className='contact-us'>
            <div className="title-contactus-container">
                <h1>Contact <span>
                    Us</span></h1>
                    <p>Contact us today and lets create something extraordinary together!</p>
            </div>
        <div className="form-contianer">
            <form>
            <Inputs type='text' placeholder='Name'/>
            <Inputs type='text' placeholder='Email' />
            <Inputs type='textarea' placeholder='Short Brief description' />
            <button type="submit">Submit</button>
            </form>
        </div>
        </main>
    )
}