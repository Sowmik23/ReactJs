import React, {Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import IndexAskey from './components/IndexAskey';
import Stylsheet from './components/Stylsheet';
import Inline from './components/Inline';

import './appStyles.css'
import styles from './appStyles.module.css'

import Form from './components/Form'



class App extends Component  {
  render() {
    return (
      <div className="App">

      {/* <Hello/> */}

        {/* <Greet name = "Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name = "Clark" heroName="Superman">
          <button>Action</button>
          </Greet>
        <Greet name = "Diana" heroName="Wonder Woman"/>

        <Welcome name = "Bruce" heroName="Batman"/>
        <Welcome name = "Clark" heroName="Superman"/>
        <Welcome name = "Diana" heroName="Wonder Woman"/>
        <Hello/> */}

        {/* <Message/>
        
        <Counter/>

        <FunctionClick/>
        <ClassClick/>
        <EventBind/> */}

        {/* <ParentComponent/> */}

        {/* <UserGreeting/> */}

        {/* <NameList/> */}

        {/* <IndexAskey/> */}


 
        {/* <Stylsheet primary = {false}/> */}

        {/* <Inline/> */}

        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}

        <Form/>
        

      </div>
    );
  }
}

export default App;
