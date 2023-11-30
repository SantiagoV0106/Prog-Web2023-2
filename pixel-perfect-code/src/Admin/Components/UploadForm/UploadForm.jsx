import { useUpload } from "../../hooks/useUpload";
import { Loader } from "../../../ui/Componets";

// Icons
import { FaTrash } from "react-icons/fa";

//Styles
import './uploadform.css'


export function UploadForm() {

    const {
        filteredProjects,
        handleOnSubmit,
        projectName,
        setProjectName,
        projectDesc,
        setProjectDesc,
        imgUrl,
        setImgUrl,
        uxChecked,
        setIsUxChecked,
        uiChecked,
        setIsUiChecked,
        webChecked,
        setIsWebChecked,
        deleteProject } = useUpload()
        

    const hasProjects = filteredProjects.length > 0




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
                                checked={uxChecked}
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
                                checked={uiChecked}
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
                                checked={webChecked}
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
            <div className="dashboard-container">
                <h2 className="project-dash-title">Porject Dashboard</h2>
                {
                    !hasProjects ? <Loader /> :

                        filteredProjects.map(({ title, id }) => {
                            return (
                                <div className="project-container" key={id}>
                                    <h2 className="dash-title" > {title}</h2>
                                    <button className="delete-btn" onClick={() => deleteProject(id)}> <FaTrash /> </button>
                                </div>
                            )
                        })
                }
            </div>
        </section>
    )
}