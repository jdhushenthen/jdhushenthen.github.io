import './Projects.css';
import mma from './assets/mma-icon.png';
import elevators from './assets/elevators.jpg'

export const Projects = () => {
    return (
        <div className="main">
            <h2 className="featured"> Featured Work. </h2>
            <div className="row">
                <div className="projects-card">
                    <a className="projects-link" href="http://jdhushenthen.github.io/mma-fight-predictor/" target="_blank">
                        <h3 className="overlay"> MMA Fight Predictor </h3>
                        <img className="image" src={mma} alt="MMA Fight Predictor"/>
                    </a>
                </div>
                <div className="projects-card">
                    <a className="projects-link" href="http://jdhushenthen.github.io/elevator-simulation-demo/" target="_blank">
                        <h3 className="overlay"> Elevator Simulation </h3>
                        <img className="image" src={elevators} alt="Elevator Simulation"/>
                    </a>
                </div>
            </div>
        </div>
    )
}