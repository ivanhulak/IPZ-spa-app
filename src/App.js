import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import TeamMembers from './components/TeamMembers/TeamMembers';
import Fichi from './components/Fichi/Fichi';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        <Header />
        <Navbar />
        <div className={styles.wrapperContent}>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/members" element={<TeamMembers />} />
            <Route path="/fithces" element={<Fichi />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
