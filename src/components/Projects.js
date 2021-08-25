import './Projects.css';
import ufc from './assets/ufc-logo.png';
import elevators from './assets/elevators.jpg'

export const Projects = () => {
    return (
        <div className="main">
            <h2 className="featured"> Featured Work. </h2>
            <div className="row">
                <div className="projects-card">
                    <h3 className="overlay"> UFC Fight Predictor </h3>
                    <img className="image" src={ufc} alt="UFC Fight Predictor"/>
                </div>
                <div className="projects-card">
                    <h3 className="overlay"> Elevator Simulation </h3>
                    <img className="image" src={elevators} alt="Elevator Simulation"/>
                </div>
            </div>
        </div>
    )
}