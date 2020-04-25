import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main/Main'
import Rte from './main/Rte'
import About from './main/About'
import Addmission from './main/Addmission'
import Syllabus from './main/Syllabus'
import Contact from './main/Contact'
import FormUserDetails from './main/form/FormUserDetails'
import { Link ,Route,Switch } from 'react-router-dom'
import { Layout, Header , Navigation, Drawer, Content } from 'react-mdl';


function App() {
  return (
    <div className="App">
      
      <content>
      <Rte/>
      </content>
          </div>
  );
}

export default App;
