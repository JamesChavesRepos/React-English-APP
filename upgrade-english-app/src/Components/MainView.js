import React, { useState } from 'react'

import styles from './MainView.module.css'
import Dashboard from './Dashboard'
import SignUpForm from './SignUpForm'
import Admin from './Admin'
import dashIcon from '../imgs/dashIcon.svg';
import formIcon from '../imgs/formIcon.svg';
import adminIcon from '../imgs/adminIcon.svg';
import dashIconClicked from '../imgs/dashIconClicked.svg';
import formIconClicked from '../imgs/formIconClicked.svg';
import adminIconClicked from '../imgs/adminIconClicked.svg';
function MainView() {
 
    const [view,setView] = useState('main');

    const swap = ({target})=>{
        setView(target.id)
    }

  return (
        <main className={styles.mainContainer}>
            <ul>
                <li  id='dash' onClick={swap}><img src={view != 'dash' ? dashIcon : dashIconClicked}/></li>
                <li id='form' onClick={swap}><img src={view != 'form' ? formIcon : formIconClicked}/></li>
                <li id='admin' onClick={swap}><img src={view != 'admin' ? adminIcon : adminIconClicked}/></li>
            </ul>
            <section className={styles.mainView}>
               {view === 'dash' && <Dashboard/>}
               {view === 'form' && <SignUpForm/>}
               {view === 'admin' && <Admin/>}
            </section>
        </main>
  )
}

export default MainView