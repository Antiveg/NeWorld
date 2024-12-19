import React, { useState, useEffect } from "react"
import styles from './CountryCard.module.css'
import '../../global.css'

const CountryCard = ({ index, flag, officialName, filterAttr }) => {

    return (
        <div className={styles.base}>
            <div className={styles.index}>
                <p className="ellipsis">{index}</p>
            </div>
            <div className={styles.flag}>
                <img className={styles.flagImg} src={flag} alt="Not Found!" />
            </div>
            <div className={styles.officialName}>
                <p className="ellipsis">{officialName}</p>
            </div>
            
            <div className={styles.commonName}>
                <p className="ellipsis">{filterAttr}</p>
            </div>
        </div>
    )
}

export default CountryCard