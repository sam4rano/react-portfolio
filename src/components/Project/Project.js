import './project.scss'
import Loader from 'react-loaders'
import Greenbrain from '../../assets/images/greenbrain.png'
import Paybeta from '../../assets/images/paybettta.png'
import Photodesign from '../../assets/images/photodesign.png'
import Uranno from '../../assets/images/uranno-png.png'


const Project = () => {
  return (
    <>
      <div className="container project-page">
        <div className="image-page page1">
          <div className="image-con">
            <img src={Greenbrain} alt="greenbrain projec" className="img-1" />
            <div className="middle">
              <a href="greenbrain.netlify.app" className="img-link">
                Greenbrain Project
              </a>
            </div>
          </div>
          <div className="image-con">
            <img src={Uranno} alt="uranno projec" className="img-2" />
            <div className="middle">
              <a href="uranno.netlify.app" className="img-link">
                Uranno Project
              </a>
            </div>
          </div>
        </div>
        <div className="image-page">
          <div className="image-con">
            <img src={Photodesign} alt="photodesign projec" className="img-3" />
            <div className="middle">
              <a href="photography.netlify.app" className="img-link">
                Photography Project
              </a>
            </div>
          </div>
          <div className="image-con">
            <img src={Paybeta} alt="paybetta projec" className="img-4" />
            <div className="middle">
              <a href="paybetta.netlify.app" className="img-link">
                Paybetta Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Project
