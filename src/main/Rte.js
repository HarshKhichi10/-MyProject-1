import React from 'react';

import {Switch , Route} from 'react-router-dom';

import About from './About'
import Addmission from './Addmission'
import Syllabus from './Syllabus'
import Contact from './Contact'
import Main from './Main'
import Academiclife from './Academiclife'
import Alumini from './Alumini'
import UserForm from './form/UserForm'
import Sports from './Sports'

const Rte =() =>(
<>
<Switch>
<Route  exact path='/' component={Main}/>
  <Route  path='/About' component={About}/>
  <Route  path='/Addmission' component={Addmission}/>
  <Route  path='/Academiclife' component={Academiclife}/>
  <Route  path='/Syllabus' component={Syllabus}/>
  <Route  path='/Contact' component={Contact}/>
  <Route  path='/Alumini' component={Alumini}/>
  <Route  path='/UserForm' component={UserForm}/>
  <Route  path='/Sports' component={Sports}/>
  </Switch>

</>
)
export default Rte;