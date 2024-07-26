
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import profilePic from './assets/profile.jpg';
import Biography from './components/Biography';
import Home from './components/Home';
import Projects from './components/projects';

function App() {
  const socialLinks = {
    twitter: "https://x.com/KatilFrambuaz",
    linkedin: "https://www.linkedin.com/in/mehmet-emre-kayacan-5a4556254/",
    instagram: "",
    github: "https://github.com/mehmetemrekayacan"
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={profilePic} className="profile-pic" alt="Profil Resmi" />
          <h1>Emre Kayacan</h1>
          <div className="buttons">
            <Link to="/Home" className="button">Ana Sayfa</Link>
            <Link to="/biography" className="button">Biyografi</Link>
            <Link to="/projects" className="button">Projeler</Link>
          </div><br/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        </header>
        <footer className="footer">
          {Object.entries(socialLinks).map(([platform, url]) => (
            <a href={url} target="_blank" rel="noopener noreferrer" className="footer-link" key={platform}>
              {platform === 'twitter' && <FaTwitter />}
              {platform === 'linkedin' && <FaLinkedin />}
              {platform === 'instagram' && <FaInstagram />}
              {platform === 'github' && <FaGithub />}
            </a>
          ))}
        </footer>
      </div>
    </Router>
  );
}

export default App;
