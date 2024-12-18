import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CountryList from './pages/CountryList/CountryList'
import CountryDetails from './pages/CountryDetails/CountryDetails'
import NotFound from './pages/NotFound/NotFound'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.layout}>
            <Router>
                <nav className={styles.navbar}>
                    <Link to="/home" className={styles.link}>Home</Link>
                    <Link to="/about" className={styles.link}>About</Link>
                    <Link to="/country" className={styles.link}>Countries</Link>
                </nav>
                <div className={styles.content}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/country" element={<CountryList />} />
                        <Route path="/country/:name" element={<CountryDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
