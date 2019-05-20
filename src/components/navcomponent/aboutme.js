import React, { Component } from 'react'


class aboutme extends Component {
  render() {
    return (
     <React.Fragment>
       <div className='about row mt-4 pt-4'>
       <div className='col-6'>
       <img src="me.jpg" alt='me'/>
       </div>
       <div className='col-6'>
       <h5>This is me</h5>
       <h2> Taher Shoker</h2>
       <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
       <a href='http:google.com' className="btn btn-info text-white">Discover Now</a>
       
       </div>

       
       </div>

     </React.Fragment>
    )
  }
}

export default aboutme
