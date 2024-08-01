import '.././css/hero.css';
import Video from '.././pics/Research_Roll.mp4';


function Hero() {
    return (
        <div name="Hero" className="hero">
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className='hero-overlay'></div>

            <div className="content">
                <div className="top-left-section">
                    <p className="headline">
                        <a id="Homepage">
                            Welcome to EXCERCISE
                        </a> 
                    </p>
                    <p className="sub-text">
                        (Explore Emerging Computing in Science and Engineering) is an interdisciplinary
                         project that explores emerging paradigms in parallel computing 
                         with data and compute-intensive applications in science and engineering.
                    </p>
                </div>
                <div className="b-left-section">
                    <a href="https://faculty.salisbury.edu/~ealu/REU/REU.html" target="_blank">
                    <button className="learn learn-button">
                        About EXCERCISE
                    </button>
                    </a>
                </div>
                
            </div>
            
        </div>
    )
}

export default Hero