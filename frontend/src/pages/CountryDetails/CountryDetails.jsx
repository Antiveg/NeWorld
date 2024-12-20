import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import styles from './CountryDetails.module.css'
import Loading from '../Loading/Loading'
import '../../global.css'
import axios from 'axios'

const CountryDetails = () => {

    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(false)
    const { name } = useParams()

    const navigate = useNavigate()

    const exclude = [
        "translations",
        "latlng",
        "flag",
        "flags",
        "coatOfArms",
        "capitalInfo",
        "maps"
    ]

    useEffect(() => {
        const getCountry = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
                setCountry(response.data)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getCountry()
    }, [])

    const extractValues = (json) => {
        let result = []
        for(let key in json){
            if(typeof json[key] === 'object'){
                if(Array.isArray(json[key])){
                    result = result.concat(json[key].map(String))
                }else{
                    result = result.concat(extractValues(json[key]))
                }
            }else{
                result.push(String(json[key]))
            }
        }
        return result
    }

    if(loading){
        return (
            <Loading
            loadingMsg="Loading... fetching country detailed information..."
            />
        )
    }

    const currentCountry = country[0]

    if(!currentCountry){
        return <div>Failed to fetch intended country...</div>
    }
    // console.log(currentCountry)

    let extractedValues = []
    for(let key in currentCountry){
        if(exclude.includes(key)){
            continue;
        }
        if(typeof currentCountry[key] !== 'object'){
            extractedValues.push([key, String(currentCountry[key])])
        }else{
            const extractedValue = extractValues(currentCountry[key])
            extractedValues.push([key, extractedValue.join(', ')])
        }
    }
    // console.log(extractedValues)
    // console.log(currentCountry)

    const navigateBack = () => {
        if(window.history.length > 1){
            navigate(-1)
        }else{
            navigate('/home')
        }
    }

    return (
        <div className={styles.base}>
            <button
            className={styles.backBtn}
            onClick={navigateBack}
            ><p className="small-title">Go Back</p></button>
            <div className={styles.header}>
                <div className={styles.flagNName}>
                    <img className={styles.flag} src={currentCountry.flags.png} alt="Not Found!" />
                    <p className="small-title">{currentCountry.name.common}</p>
                </div>
                <div className={styles.mapContainer}>
                    <img src="https://img.freepik.com/free-photo/closeup-pins-map-planning-travel-journey_53876-74654.jpg?t=st=1734626841~exp=1734630441~hmac=22de3bee96710cffe3cc9e77ed1c305c233efeafc7f309fb4e60d19c22edd978&w=1800" alt="Not Found!" className={styles.map}/>
                </div>
            </div>
            <div className={styles.info}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.row}>
                            <td className={styles.attr}>ATTRIBUTE</td>
                            <td className={styles.attr}>VALUE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {extractedValues.map(([key, content]) => { return (
                            <tr className={styles.row} key={key}>
                                <td className={styles.attr}>{key}</td>
                                <td className={styles.value}>{content}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CountryDetails