import { Inputs } from '../Inputs/Inputs'
import './uploadform.css'

export function UploadForm() {
    return (
        <section className='upload-section'>
            <div className="datos-container">
                <form>
                    <Inputs type='text' placeholder='Project Title' />
                    <Inputs type='text' placeholder='Project Description' />
                    <Inputs type='text' placeholder='Members' />
                    <button type="submit">Upload</button>
                </form>
            </div>
            <div className="file-container">
                <Inputs type='file' placeholder='Drop file'/>
            </div>
        </section>
    )
}