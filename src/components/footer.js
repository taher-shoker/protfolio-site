import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

class footer extends Component {
    render() {
        return (
            <footer>
                <div className='row'>
                <div className='col-4'>
                <h3>About Me</h3>
                <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
                </div>
                <div className='offset-4 col-4 text-center'>
                <h3>Follow Me</h3>
                <ul>
       <li><a href='https://myaccount.google.com'><i className="fab fa-linkedin-in fa-1x"></i></a></li>
       <li><a href='https://myaccount.google.com'><i className="fab fa-google-drive fa-1x"></i></a></li>
       <li><a href='https://myaccount.google.com'><i className="fab fa-github fa-1x"></i></a></li>
       <li><a href='https://myaccount.google.com'><i className="fab fa-youtube fa-1x"></i></a></li>
       </ul>
                </div>
                </div>
                <div className='row'>
                <div className='offset-4 col-6'>
                <p>  
Copyright © 2019  All rights reserved | This site is made with <a href='taher.com'>Me</a></p>
                </div>
                </div>

            </footer>
        )
    }
}

export default footer
