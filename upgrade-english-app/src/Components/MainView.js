import React, { useState } from 'react'

import styles from './MainView.css'
import Dashboard from './Dashboard'
import SignUpForm from './SignUpForm'
import Admin from './Admin'
import dashIcon from '../imgs/dashIcon.svg';
import formIcon from '../imgs/formIcon.svg';
import adminIcon from '../imgs/adminIcon.svg';

function MainView() {
    const [view,setView] = useState('mainView');

    const swap = (e)=>{
        console.log(e.target)
        console.log(e.target.id)
        e.target.setSrc
    }

  return (
        <main className='mainContainer'>
            <ul>
                <li  id='dash' onClick={swap}><img src={dashIcon}/></li>
                <li id='form' onClick={swap}><img src={formIcon}/></li>
                <li id='admin' onClick={swap}><img src={adminIcon}/></li>
            </ul>
            <section className='mainView'>
               {view === 'dashboard' && <Dashboard/>}
               {view === 'sign up form' && <SignUpForm/>}
               {view === 'admin' && <Admin/>}
            </section>
        </main>
  )
}

export default MainView