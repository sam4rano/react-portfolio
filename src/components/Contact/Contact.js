import './contact.scss'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState, useEffect } from 'react'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  
  const sendEmail = (e) => {
    e.preventDefault()
    const templateId = 'template_k9r4iv8';
    const serviceId = 'service_qb7m84q';
    const tokenId = 'FYFsVJE5_FopXS4SR';

    emailjs
      .sendForm(
        serviceId,  
        templateId, 
        form.current, tokenId)
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }



  return (
    <>
      <div className="container contact-page">
        <div className="text-zone contact-text">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Samuel Oyerinde,
            <br />
            Olorunsogo, Abeokuta <br />
            Ogun State  <br />
            Nigeria<br />
            <span>sam4rano@gmail.com</span>
        </div>
        <div className='map-wrapper'>
            <MapContainer center={[7.221723,3.439702]} zoom={13}>
                <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[7.221723,3.439702]}>
                    <Popup>Samuel lives here, come over for a drink :)</Popup>
                </Marker>
            </MapContainer>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
