import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import LogoS from '../../assets/images/logo-s.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser, faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {

  return (
    <div className="sidebar">
        <Link className="logo" to="/" >
            <img src={LogoS} alt="logo" />
            <h1 className='log-text'>SAMUEL</h1>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                    href="https://www.linkedin.com/in/oyerinde-samuel-46a9a3186/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                    icon={faLinkedin}
                    color="#4d4d4e"
                    className="anchor-icon"
                    />
                </a>
            </li>

            <li>
                <a
                    href="https://github.com/sam4rano"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                    icon={faGithub}
                    color="#4d4d4e"
                    className="anchor-icon"
                    />
                </a>
            </li>

            <li>
                <a
                    href="https://www.youtube.com/channel/UCT8kM7F-O90ovx69Kp0CI6Q/featured"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                    icon={faYoutube}
                    color="#4d4d4e"
                    className="anchor-icon"
                    />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
