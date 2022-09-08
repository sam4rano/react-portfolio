import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './home.scss';
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter';
import LogoSS from '../../assets/images/logo-s.png';
import Loader from 'react-loaders'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['a', 'm', 'u', 'e', 'l'];
  const jobArray = ['S','o','f','t','w','a','r','e',' ','d','e','v','e','l','o','p','e','r','.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader type="pacman" />
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="Frontend Developer Name, Audio Engineer Name"
            />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Python Engineer / Audio Engineer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <img src={LogoSS} alt="logo" className="logoS" />
    </>
  )
}

export default Home
