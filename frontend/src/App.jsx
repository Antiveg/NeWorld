import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CountryList from './pages/CountryList/CountryList'
import CountryDetails from './pages/CountryDetails/CountryDetails'
import NotFound from './pages/NotFound/NotFound'
// import Loading from './pages/Loading/Loading'
import styles from './App.module.css'
import './global.css'

function App() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    const changeColorMode = () => {
        const newTheme = isDarkMode ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', newTheme)
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className={styles.layout}>
            <Router>
                <nav className={styles.navbar}>
                    <Link to="/home" className={styles.link}>Home</Link>
                    <Link to="/about" className={styles.link}>About</Link>
                    <Link to="/country" className={styles.link}>Countries</Link>
                    <button className={styles.modeBtn} onClick={changeColorMode}>
                        {isDarkMode
                        ? <svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 8.00002C0 4.75562 1.93132 1.9623 4.70701 0.707031L5.65436 1.65438C5.2352 2.51383 5 3.47946 5 4.50002C5 8.08987 7.91015 11 11.5 11C12.5206 11 13.4862 10.7648 14.3456 10.3457L15.293 11.293C14.0377 14.0687 11.2444 16 8 16C3.58172 16 0 12.4183 0 8.00002Z" fill="#ffffff"/>
                        <path d="M11.5 7.00003L9 4.50003L11.5 2.00003L14 4.50003L11.5 7.00003Z" fill="#ffffff"/>
                        </svg>
                        : <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>}
                    </button>
                </nav>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/country" element={<CountryList />} />
                        <Route path="/country/:name" element={<CountryDetails />} />
                        <Route path="*" element={<NotFound />} />
                        {/* <Route path="/loading" element={<Loading/>}/> */}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
