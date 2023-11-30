import skillsCardInfo from '../../const/skillsCardInfo'
import './skills.css'

export function Skills() {
    return (
        <section className='skill-section'>
            <div className="title-container">
                <p>services</p>
                <h2>Skills
                <span></span>
                </h2>
            </div>
            <div className="skills-container">
                {
                    skillsCardInfo.map(({id, icon, title, desc}, i)=> {
                        const impar = i % 2 === 1;
                        const containerClass = impar ? 'par-container' : 'impar-container'
                        return(
                            <div key={id} className={containerClass} >
                                <img src={icon} alt={icon} />
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}