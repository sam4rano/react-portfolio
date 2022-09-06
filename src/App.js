
import './App.scss';
import Layout from './components/Layout/Layout'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" index element={<About />} />
          <Route path="contact" index element={<Contact />} />
          <Route path="project" index element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
