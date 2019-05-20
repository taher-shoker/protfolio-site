import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import { Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
 class Resume extends Component {
  render() {
    return (
      
        <Grid className="demo-grid-2">
        
        <Cell col={4} style={{ background:'#fff' }}>
        <div className="left">
        <img src="profile.png" alt=""/>
        <h2 className="mt-4"> Taher Shoker</h2>
        <span className='text-info '>Full Stack Developer</span>
        <hr style={{ borderTop:'3px solid red' }}/>
        <p style={{ textTransform:'capitalize' }}>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>


        </div>
        </Cell>
        <Cell col={8}>
        <div className="right" >
        <h4>Education</h4>
        <div className=""></div>
        <hr/>
        <h4>Skills</h4>
       
         <Progress animated color="success" value={95}>HTML5 & Css3</Progress><br/>
         <Progress animated color="info" value={80}>JavaScript</Progress><br/>
         <Progress animated color="warning" value={75}>React</Progress><br/>
         <Progress animated color="danger" value={65}>PHP</Progress><br/>
         <Progress animated color="warning" value={70}>Angular</Progress>

       
        </div>
        </Cell>
        
    </Grid>
      
    )
  }
}

export default Resume
