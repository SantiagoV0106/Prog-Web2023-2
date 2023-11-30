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
                Our <b> multidisciplinary team </b> excels in crafting intuitive interfaces and conducting in-depth user research. 
                </p>
            </div>
            <div className="images-container">
                {
                    teamCardInfo.map(({ id, name, img, alt }) => {
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