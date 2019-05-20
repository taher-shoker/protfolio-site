import React, { Component } from 'react'

 class loadingpage extends Component {
  render() {
    return (
      <div className="home-page">
       <img src='profile.png' className='pro-img img-fluid mb-4' alt='profile'/>
       <div className='banner-text'>
       <h1> Full Stack Web Developer </h1>
       <hr/>
       <div className='skills'>
       <p> Html5 | Css3 & Bootstrap 4 & Sass & Javascript | Jquery & Reactjs | Angular6 & Nodejs | Php & Mongodb | Mysql</p>
       </div>
       <div className='social-links'>
       <ul>
       <li><a href='https://myaccount.google.com'><i className="fab fa-linkedin-in fa-3x"></i></a></li>
       <li><a href='https://myaccount.google.com'><i className="fab fa-google-drive fa-3x"></i></a></li>
       <li><a href='https://myaccount.google.com'><i className="fab fa-github fa-3x"></i></a></li>
       <li><a href='https://myaccount.google.com'><i className="fab fa-youtube fa-3x"></i></a></li>
       </ul>
       </div>
       </div>
      </div>
    )
  }
}

export default loadingpage
