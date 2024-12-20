import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'
import '../../global.css'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.base}>
            <p className="super-huge-title">404</p>
            <p className="big-title">Not Found</p>
            <p className={styles.note}>Oops... looks like you lost somewhere. Click this button to go back to home!</p>
            <button
            onClick={() => navigate('/home')}
            className={styles.btn}
            >Home →</button>
        </div>
    )
}

export default NotFound