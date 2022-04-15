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
  return (
        <main className='mainContainer'>
            <ul>
                <li><img src={dashIcon}/></li>
                <li><img src={formIcon}/></li>
                <li><img src={adminIcon}/></li>
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