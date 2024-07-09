import React from 'react'
import '../componentStyles/Footer.css'
import github from '../img/github-Icon.png'

const Footer = () => {
  return (
<footer className='footers'>
    <h1>Rancid Tomatillos</h1>
    <div className="Info-section">
      <h3 className='name'>Adam Konber</h3>
        <img className="github" src={github} />
        <a href="https://github.com/Sterling47" className="Adam-Github"> @Github</a>

        <h3 className='name'>Seong Kang</h3>
        <img className="github" src={github} />
        <a href='https://github.com/Sanghoro' className="Seong-Github"> @Github</a>
    </div>

</footer>
  )
}

export default Footer