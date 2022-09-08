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
          <div className="image-con con1">
            <img src={Greenbrain} alt="greenbrain projec" className="img-1" />
            <div className="overlay over-1">
              <a href="https://greenbrain.vercel.app/" className="gb-link text">
                Greenbrain Project
              </a>
            </div>
          </div>
          <div className="image-con con2">
            <img src={Uranno} alt="uranno projec" className="img-2" />
            <div className="overlay over-2">
              <a href="https://uranno.netlify.app/" className="ur-link text">
                Uranno Project
              </a>
            </div>
          </div>
        </div>
        <div className="image-page">
          <div className="image-con con3">
            <img src={Photodesign} alt="photodesign projec" className="img-3" />
            <div className="overlay over-3">
              <a href="https://photomagikk.netlify.app/" className="pg-link text">
                Photography Project
              </a>
            </div>
          </div>
          <div className="image-con con4">
            <img src={Paybeta} alt="paybetta projec" className="img-4" />
            <div className="overlay over-4">
              <a href="https://paybettta.netlify.app/" className="pp-link text">
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
