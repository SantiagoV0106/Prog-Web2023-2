import teamCardInfo from '../../const/teamCardInfo'
import './ourteam.css'

export function OurTeam() {
    return (
        <section className='info-container'>
            <div className="text-container">
                <h2 className='our-title'>
                    Our <span>
                        Team
                    </span>
                </h2>
                <p className='desc-text'>
                    Our multidisciplinary team
                    excels in crafting intuitive interfaces and conducting
                    in-depth user research to guide our design decisions.
                </p>
            </div>
            <div className="images-container">
                {
                    teamCardInfo.map(({ id, name, img, alt, fullName, rol }) => {
                        return (
                            <div key={id} className="img-container">
                                <img src={img} alt={alt} />
                                <span> {name} </span>
                            </div>
                        )
                    })
                }
            </div>


        </section>
    )
}