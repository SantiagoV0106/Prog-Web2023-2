import { Link } from 'react-router-dom'
import { Filters } from '../Filters/Filters'
import { useProjects } from '../../hooks/useProjects'

// Styles
import './ourwork.css'

export function OurWork() {

    const {
        showFilters,
        filters,
        handleCheckboxChange,
        filteredProjects
    } = useProjects()

    return (
        <section className='our-work-secction' >
            <div className="work-title-container">
                <h2>Our Work
                    <span></span>
                </h2>
            </div>
            {showFilters != '/' ? <Filters filters={filters} handleChange={handleCheckboxChange} /> : null}
            <div className="works-container">
                {
                    filteredProjects.map(({ id, image, title, description, uxresearch, uidesign, webdev }) => {
                        return (
                            <Link className="work-container" to={`/project/${id}`} key={id}>
                                <img src={image} alt={title} />
                                <h2>{title}</h2>
                                <p id='desc'>{description}</p>
                                <div className="tag-container">
                                    {uxresearch ? <p className='tag'> UX Research </p> : null}
                                    {uidesign ? <p className='tag'> UI Design </p> : null}
                                    {webdev ? <p className='tag'> Web Dev </p> : null}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>

        </section>
    )
}