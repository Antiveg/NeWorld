import React from "react"
import styles from './FeatureCard.module.css'
import '../../global.css'

const FeatureCard = ({ img, title, desc }) => {
    return (
        <div className={styles.base}>
            {img}
            <div className={styles.featureDesc}>
                <p className="medium-title">{title}</p>
                <p className="small-text justify">{desc}</p>
            </div>
        </div>
    )
}

export default FeatureCard