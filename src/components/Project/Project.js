import './project.scss';
import Loader from 'react-loaders'
import Greenbrain from '../../assets/images/greenbrain.png';
import Paybetta from '../../assets/images/paybetta.png';
import Photodesign from '../../assets/images/photodesign.png';
import Uranno from '../../assets/images/uranno-png.png';
const Project = () => {
    return (
        <>
            <div className="container project-page">
                <div className="image-page">
                    <img src={Greenbrain} alt="greenbrain projec" className="img-1" />
                    <br />
                    <img src={Paybetta} alt="paybetta projec" className="img-2" />
                </div>
                <div className="image-page">
                    <img src={Photodesign} alt="photodesign projec" className="img-3" />
                    <br />
                    <img src={Uranno} alt="uranno projec" className="img-4" />
                </div>
                
            </div>
            <Loader type="pacman" />
        </>
    )
}
export default Project