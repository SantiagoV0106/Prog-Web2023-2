
import './contactusform.css'

export function ContactUsForm() {
    return (
        <section className='contact-us'>
            <div className="title-contactus-container">
                <h2>Contact <span>
                    Us</span></h2>
                <p>Contact us today and lets create something extraordinary together!</p>
            </div>
                <form className='contact-us-form'>
                    <input 
                    type="text" 
                    name="name" 
                   
                    placeholder='Name' />
                    <input 
                    type="email"
                    name="email"
                   
                    placeholder='Email' />
                    <textarea 
                    name="brief" 
                    id="brief" 
                    cols="30" 
                    rows="10"
                    placeholder='Short Brief description'/>
                    <button type="submit" id='btn-contactus'>Submit</button>
                </form>
        </section>
    )
}