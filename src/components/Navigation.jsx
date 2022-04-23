import React from 'react';


const Navigation = () => {
  return (
    <header>
      <img class='logo' src="https://avatars.githubusercontent.com/u/98630215?v=4" alt='logo'/> 
      <nav>
        <ul className='nav-links'>
            <li><a href="http://localhost:3000/">Services</a></li>
            <li><a href="http://localhost:3000/">Projects</a></li>
            <li><a href="http://localhost:3000/">About</a></li>
        </ul>
      </nav>
        <a class="cta" href="#"><button>Contact</button></a>
    </header>
  )
}

export default Navigation;