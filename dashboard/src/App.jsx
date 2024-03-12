/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Profile from './components/Profile'
// Redux
import {connect, Provider} from "react-redux"
import store from './store';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Provider store={store}>
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="dashboard">
        <div className="dashboard--content">
          <Content />
          <Profile/>
        </div>
      </div>
    </div>
    </Provider>
  )
}

// connect 메서드로 어플리케이션 수출
export default connect()(App);