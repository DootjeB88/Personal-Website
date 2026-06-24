import { useState } from 'react';

function Navbar() {
  const [active, setActive] = useState('home');

  return (
    <nav>
      <h2>Dominique Bloks</h2>
      <div className="nav-links">
        <a href="#home" className={active === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActive('home')}>Home</a>
        <a href="#about" className={active === 'about' ? 'nav-link active' : 'nav-link'} onClick={() => setActive('about')}>About</a>
        <a href="#projects" className={active === 'projects' ? 'nav-link active' : 'nav-link'} onClick={() => setActive('projects')}>Projects</a>
        <a href="#contact" className={active === 'contact' ? 'nav-link active' : 'nav-link'} onClick={() => setActive('contact')}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;