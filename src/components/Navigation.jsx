import React from 'react';


const Navigation = () => {
  return (
    <header>
      <img class='logo' src="https://pbs.twimg.com/profile_images/1510700341951561729/AIrTjju1_400x400.jpg" alt='logo'/> 
      <nav>
        <ul className='nav-links'>
            <li><a href="http://localhost:3001/">Services</a></li>
            <li><a href="http://localhost:3001/">Projects</a></li>
            <li><a href="http://localhost:3001/">About</a></li>
        </ul>
      </nav>
        <a class="cta" href="#"><button>Contact</button></a>
    </header>
  )
}

export default Navigation;