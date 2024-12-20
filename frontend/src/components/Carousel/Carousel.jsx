import React, { useState, useEffect } from "react";
import axios from 'axios'
import styles from './Carousel.module.css'
import Loading from '../../pages/Loading/Loading'
import '../../global.css'

const Carousel = () => {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [index, setIndex] = useState(0)

    const addIndex = (value) => {
        if(index + value < 0){
            setIndex(4)
        }else if(index + value > 4){
            setIndex(0)
        }else{
            setIndex(index + value)
        }
    }

    useEffect(() => {
        const getAllCountries = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://restcountries.com/v3.1/all")
                const top5countries = response.data
                    .sort((a, b) => (b.population || 0) - (a.population || 0))
                    .slice(0, 5)

                const formatter = new Intl.NumberFormat('de-DE');
                top5countries.forEach(country => {
                    country.population = formatter.format(country.population)
                });

                setCountries(top5countries)
            }catch(error){
                console.log("Error fetching all country data!")
            }finally{
                setLoading(false)
            }
        }
        getAllCountries()
    }, [])

    if(loading){
        return (
            <Loading
            loadingMsg="Loading setting up carousel content..."
            />
        )
    }

    const currentCountry = countries[index];
    if(!currentCountry){
        return (
            <div>Country Data doesn't exist!</div>
        )
    }

    return (
        <div className={styles.carousel}>
            <img className={styles.imgBg} src={currentCountry.flags.png} alt="Not Found!" />
            <div className={styles.details}>
                <p className="small-text ellipsis white">Most Populated Country #{index + 1}: {currentCountry.name.official}</p>
                <h1 className="big-title ellipsis white">{currentCountry.population} People</h1>
            </div>
            <div className={styles.leftToggle} onClick={() => addIndex(-1)}>←</div>
            <div className={styles.rightToggle} onClick={() => addIndex(1)}>→</div>
        </div>
    )
}

export default Carousel