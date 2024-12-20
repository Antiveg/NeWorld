import React, { useState, useEffect } from "react"
import styles from './About.module.css'
import '../../global.css'
import Flag from '../../assets/imaginaryflag.jpg'
import axios from 'axios'
import CountryCard from '../../components/CountryCard/CountryCard'
import Loading from "../Loading/Loading"

const About = () => {

    const creatorWorldData = {
        "worldImg": "https://img.freepik.com/free-photo/earth-depicted-anime-style_23-2151076497.jpg",
        "Description": "Earth 3.0 is a place where everyone can breathe freely, without the fear of pollution harming us. It is a place where flowers and plants can grow and live alongside us, and where we can hear the sound of a clean sea. In this world, every human can live a peaceful life, free from the fear of being hurt by others. People would have the freedom to live in a way that makes them smile at each other. In Earth 3.0, nature and technology work in harmony, with neither fearing that the other will be replaced or destroyed. Instead, they would discover new powers that can be used to help more people in need. In this world, every person is equal regardless of their perspective, country, or traditions. Everyone would be able to trust one another and live in peace together",
        "OtherCountries": [
            "Singapore",
            "China",
            "Italy",
            "Russia",
            "United Kingdom",
            "Switzerland"
        ],
    }

    const creatorCountryData = {
        "imgs": [
            "https://img.freepik.com/free-photo/friends-eating-pizza-party_23-2148115694.jpg?t=st=1734606301~exp=1734609901~hmac=e8c99e1b29fb510d415540b7e47049b44699a4bc430d3cc02f14ac4d9176cfd7&w=1480",
            "https://img.freepik.com/free-photo/medium-shot-girl-listening-music_23-2149438419.jpg?t=st=1734605992~exp=1734609592~hmac=67b47ac87da67dba91ff29607f771779452b12830e248012a6e77f84667153dc&w=1800",
            "https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1734606032~exp=1734609632~hmac=8c6cc16dee113c370940d7e5c44108eb8c3bb1e3761028d0c87674de59dfcc09&w=1800",
            "https://img.freepik.com/free-photo/two-girls-twins-together-winter-park_1303-13787.jpg?t=st=1734606119~exp=1734609719~hmac=98b52d5e9f0148e6ada3e44fe4ec5f10f2709e6cb04733c8d996a94c862bd9ca&w=1800"
        ],
        "Official Name":"Dreamia",
        "Common Name":"Dreamia",
        "Description":"Dreamia is a simple country located in the middle of all continents. It has a medium-sized population that lives together in tolerance and understanding. Though its a country filled by frequent rain and snowfall, it has good mild temperature, the perfect environment for outdoor activities, stargazing and enjoy the beauty of the night sky. The cities in Dreamia are a fusion of technology and nature. Many people treat animals and plants with great care, and the technology used is eco-friendly. Dreamia also focuses on the recovery of human society and protection. This country dedicated itself to discovers plans for mental health and education, with an emphasis on creating harmony that extends to every country in the world, ensuring no one is left behind. I want this country because it has such peace and harmony atmosphere in life, less polution, and friendlier neighborhood, plus my favorite weathers are rain and snow",
        "Capital City":"iceworld",
        "Top-Level Domain (tld)":".dm",
        "Timezones":"UTC-00:00",
        "Region":"Asia",
        "Language":"English",
        "Population":"5.320.645 poeple",
        "Currency":"(S) Sollar",
        "Flag":"../../assets/imaginaryflag.jpg"
    }

    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const getCountries = async () => {
            try {
                setLoading(true)
                const countries = creatorWorldData.OtherCountries
                const requests = countries.map((countryName) => { return (
                    axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`)
                )})
                const responses = await Promise.all(requests)
                setCountries(responses.map((response) => response.data[0]))
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        getCountries()
    }, [])

    if(loading){
        return (
            <Loading
            loadingMsg="Loading... setting up about page"
            />
        )
    }

    const wantedCountries = countries
    if(!wantedCountries){
        return <div>Failed to fetch countries...</div>
    }

    return (
        <div className={styles.base}>
            <h1 className="medium-title">My NeWorld: Earth 3.0</h1>
            <div className={styles.aboutWorld}>
                <div className={styles.worldDesc}>
                    <p className="justify">{creatorWorldData.Description}</p>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.earthImg} src={creatorWorldData.worldImg} alt="Not Found!" />
                </div>
            </div>
            <hr />
            <div className={styles.aboutCountry}>
                <p className="medium-title">My Country: Dreamia</p>
                <div className={styles.countryImgs}>
                    {(creatorCountryData.imgs).map((img) => {
                        return (
                            <div className={styles.gridChild}>
                                <img
                                src={img}
                                className={styles.imgCountry}
                                alt="Not Found!"/>
                            </div>
                    )})}
                </div>
                <div className={styles.countryInfo}>
                    <table className={styles.basicInfoTable}>
                        <tbody className={styles.tableBody}>
                            {Object.entries(creatorCountryData)
                                .filter(([key]) => (key !== "imgs" && key !== "Description"))
                                .map(([key, value]) => (
                                <tr key={key} className={styles.row}>
                                    <td className={styles.attr}>{key}</td>
                                    {key === "Flag"
                                    ? <td className={styles.value}><img className={styles.flag} src={Flag} alt="Flag Not Found!" /></td>
                                    : <td className={styles.value}>{value}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.countryDescription}>
                        <p className="justify">{creatorCountryData.Description}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.countryNextDoor}>
                <p className="medium-title">6 Other Countries I Want in Earth 3.0</p>
                <div className={styles.countryContainer}>
                    {wantedCountries.map((country, index) => {return (
                        <CountryCard
                        key={index}
                        index={index + 1}
                        flag={country.flags.png}
                        officialName={country.name.official}
                        commonName={country.name.common}
                        filterAttr={country.name.common}
                        />
                    )})}
                </div>
            </div>
        </div>
    )
}

export default About