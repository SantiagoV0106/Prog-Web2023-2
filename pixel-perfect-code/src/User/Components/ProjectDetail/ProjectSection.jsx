import './projectsection.css'

export function ProjectSection({ title, desc, img, ux, ui, web }) {
return(
    <section className="project-section">
        <div className="project-title-container">
            <h1> {title} </h1>
            <p> {desc} </p>
        </div>
        <img id='project-img' src={img} alt={title} />
        <div className="project-tags-container">
            {ux ? <p className='tag'> UX Research </p> : null}
            {ui ? <p className='tag'> UI Design </p> : null}
            {web ? <p className='tag'> Web Dev </p> : null}
        </div>
    </section>
)

}