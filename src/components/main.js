import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Loadingpage from './home'

import Resume from './navcomponent/resume'
import aboutme from './navcomponent/aboutme';
import projects from './navcomponent/projects';
import contactus from './navcomponent/contactus';
import PageNotFound from './pageNotFound';


 function Main() {
  return (
    <Switch>
     <Route exact path='/' component={Loadingpage}/>
     <Route exact path='/resume' component={Resume}/>
     <Route exact path='/aboutme' component={aboutme}/>
     <Route exact path='/projects' component={projects}/>
     <Route exact path='/contactus' component={contactus}/>
     <Route exact path='/:params' component={PageNotFound}/>


    </Switch>
  )
}

   

export default Main;