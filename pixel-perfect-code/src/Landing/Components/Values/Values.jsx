import './values.css'

export function Values() {
    return (
        <section className='values-section'>
            <h2 id='title'>Values</h2>
            <p id='description'>These values are not just words;
                they are the guiding principles that define who we are and how we work. When you choose PixelPerfect,
                you choose a partner dedicated to honesty, excellence, and responsibility in design.
            </p>
            <div className="values-container">
                <div className="value-container">
                    <h2>
                        Excellence
                    </h2>
                    <p>
                        We are passionate about delivering exceptional results.
                        We strives for excellence in every project.
                    </p>
                </div>


                <div className="value-container">
                    <h2>
                        Honesty
                    </h2>
                    <p>
                        We believe in transparency and integrity in all our interactions.
                    </p>
                </div>


                <div className="value-container">
                    <h2>
                        Responsibility
                    </h2>
                    <p>
                        We take our commitments seriously. With a strong sense of responsibility.
                    </p>
                </div>
            </div>
        </section>
    )
}