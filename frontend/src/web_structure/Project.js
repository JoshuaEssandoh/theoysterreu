import '.././css/project.css';


function Project() {
    return (
        <div name="Projects" className="project-section">
            <div className="project-left-section">
                <p className="project-head">
                    <a id="Project">
                    Our Project: Oyster Orientation
                    </a>
                </p>
                <div className="top-left-section">
                    <p className="project-sub-text">
                        We aim to build upon the previous work done on Oyster Orientation and Deep Learning Image Processing 
                        by Joshua Comfort, Ian Rudy, and Dr. Yunawei Jin. In the results, 
                        the research team was able to implement YOLOv5, a deep-learning detection model 
                        used to recognize and classify the oysters into 3 different states: slightly open, open, and closed. 
                        What we can improve is incorporate the updated version of YOLOv5, 
                        YOLOv8 and expand the use of the system to detect depth as well.
    
                    </p>
                </div>
                <div className="bottom-lft-section">
                    <a href="https://ianrudy.com/ManualDownloads/NSFREUFinalReport.pdf" target="_blank">
                        <button className="pdf pdf-button">
                            PDF of Research
                        </button>
                    </a>    
                </div>
                
                
            </div>
            <div className="project-right-section">
                
            </div>
            
        </div>
    )
}

export default Project