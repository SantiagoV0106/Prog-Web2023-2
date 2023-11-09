import ourWork from '../../const/ourWok'
import './ourwork.css'

export function OurWork() {
    return (
        <section>
            <div className="work-title-container">
                <h2>Our Work
                    <span></span>
                </h2>
            </div>
            <div className="works-container">
                {
                    ourWork.map(({ id, img, title, desc }) => {
                        return (
                            <div className="work-container" key={id}>
                                <img src="" alt={img} />
                                <h2>{title}</h2>
                                <p>{desc}</p>
                            </div>
                        )
                    })
                }
            </div>

        </section>
    )
}