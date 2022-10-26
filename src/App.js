import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import TeamMembersContainer from './components/TeamMembers/TeamMembersContainer';


function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        <Header />
        <Navbar />
        <div className={styles.wrapperContent}>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/members" element={<TeamMembersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
