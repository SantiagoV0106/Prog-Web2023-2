import { useState } from "react";
import { db } from "../../../config/firebase";
import { addDoc, collection } from 'firebase/firestore'
// Icons
import { FaFileUpload } from "react-icons/fa";

import './uploadform.css'

const initialInputState = ''

export function UploadForm() {

    const [projectName, setProjectName] = useState(initialInputState)
    const [projectDesc, setProjectDesc] = useState(initialInputState)
    const [imgUrl, setImgUrl] = useState(initialInputState)
    const [uxChecked, setIsUxChecked] = useState(false)
    const [uiChecked, setIsUiChecked] = useState(false)
    const [webChecked, setIsWebChecked] = useState(false)

    const projectsCollectionRef = collection(db, 'projects')


    const handleOnSubmit = (e) => {
        e.preventDefault()
        uploadProject()

    }

    const uploadProject = async () => {

        try {
            await addDoc(projectsCollectionRef, {
                title: projectName,
                image: imgUrl,
                description: projectDesc,
                uidesign: uiChecked,
                uxresearch: uxChecked,
                webdev: webChecked,
            })
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <section className='upload-section'>
            <div className="datos-container">
                <h1>Upload project</h1>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        placeholder='Project Name'
                        className='inputs-upload'
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        />
                    <textarea
                        name=""
                        id="project-desc"
                        cols="30"
                        rows="10"
                        value={projectDesc}
                        onChange={(e) => setProjectDesc(e.target.value)}
                        placeholder='Project Description'></textarea>
                    <input
                        type="text"
                        name=""
                        placeholder='Project Image'
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                        className='inputs-upload' />

                    <div className="checkboxes-container">

                        <div className="checkbox-wrapper-4">
                            <input
                                className="inp-cbx"
                                id="uxresearch"
                                name="uxresearch"
                                type="checkbox" 
                                onChange={(e) => setIsUxChecked(e.target.checked)} />
                            <label
                                className="cbx"
                                htmlFor="uxresearch"><span>
                                    <svg width="12px" height="10px">

                                    </svg></span><span>UX Research</span></label>
                            <svg className="inline-svg">
                                <symbol id="check-4" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </symbol>
                            </svg>
                        </div>

                        <div className="checkbox-wrapper-4">
                            <input
                                className="inp-cbx"
                                id="uidesign"
                                name="uidesign"
                                type="checkbox" 
                                onChange={(e) => setIsUiChecked(e.target.checked)} />
                            <label
                                className="cbx"
                                htmlFor="uidesign"><span>
                                    <svg width="12px" height="10px">

                                    </svg></span><span>UI Design</span></label>
                            <svg className="inline-svg">
                                <symbol id="check-4" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </symbol>
                            </svg>
                        </div>
                        <div className="checkbox-wrapper-4">
                            <input
                                className="inp-cbx"
                                id="webdev"
                                name="webdev"
                                type="checkbox" 
                                onChange={(e) => setIsWebChecked(e.target.checked)} />
                            <label
                                className="cbx"
                                htmlFor="webdev"><span>
                                    <svg width="12px" height="10px">

                                    </svg></span><span>Web Dev</span></label>
                            <svg className="inline-svg">
                                <symbol id="check-4" viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </symbol>
                            </svg>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className='upload-btn'>Upload</button>
                </form>
            </div>
            <div className="file-container">
                <input
                    type="file"
                    name="file"
                    placeholder='Upload project image'
                    className='file-input'
                />
                <label
                    htmlFor="file"
                    className="upload-inp-label"
                >
                    <FaFileUpload />
                    <p>Browse Files</p>
                </label>
            </div>
        </section>
    )
}