import React, { useEffect, useState } from "react"
import './CountryList.module.css'
import styles from './CountryList.module.css'
import axios from 'axios'
import CountryCard from '../../components/CountryCard/CountryCard'
import Dropdown from "../../components/Dropdown/Dropdown"
import SearchBox from "../../components/SearchBox/SearchBox"
import Loading from '../Loading/Loading'

const CountryList = () => {

    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [filterAttr, setFilterAttr] = useState('name')
    
    // struktur json data setiap negara berbeda-beda sehingga dynamic filter choice sulit diimplementasi
    const filterChoices = [ 
        "name",
        "tld",
        "capital",
        "languages",
        "timezones",
        "continents",
        "region",
        "area",
        "population",
        "currencies"
    ]

    useEffect(() => {
        const getAllCountries = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
                setCountries(response.data)
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
            loadingMsg="Loading... fetching country list"
            />
        )
    }

    const getCountryAttrValue = (country) => {

        if(country[filterAttr] == null){
            // console.log(country.name.common + "country[filter] null")
            return null;
        }

        if(['region','area','population'].includes(filterAttr)){
            return country[filterAttr]
        }else if(filterAttr === 'currencies'){
            return `(${Object.values(country[filterAttr])[0].symbol}) ${Object.values(country[filterAttr])[0].name}`
        }else{
            return Object.values(country[filterAttr])[0]
        }
    }

    const countryList = countries.filter((country) => {
        const countryAttrValue = getCountryAttrValue(country)
        if (countryAttrValue == null) {
            return false;
        }
        if(typeof countryAttrValue === 'number'){
            return countryAttrValue.toString().toLowerCase().includes(search.toLowerCase())
        }
        return countryAttrValue.toLowerCase().includes(search.toLowerCase())
    }).map((country) => {
        const countryAttrValue = getCountryAttrValue(country)
        return {
            ...country,
            filterValue: countryAttrValue
        }
    })

    if(!countryList){
        return <div>Country data failed to be fetched, doesnt exist or api error...</div>
    }

    return (
        <div className={styles.base}>
            <div className={styles.functionality}>
                <SearchBox
                input={search}
                placeholder={`Search based on ${filterAttr}`}
                onChange={setSearch}
                />
                <Dropdown 
                choices={filterChoices}
                onSelect={setFilterAttr}
                />
            </div>
            <div className={styles.headerBase}>
                <div className={styles.headerIndex}>
                    <p className="ellipsis small-title">No.</p>
                </div>
                <div className={styles.headerFlag}>
                    <p className="ellipsis small-title">Flag</p>
                </div>
                <div className={styles.headerOfficialName}>
                    <p className="ellipsis small-title">Official Country Name</p>
                </div>
                <div className={styles.headerFilter}>
                    <p className="ellipsis small-title">Filter: {filterAttr}</p>
                </div>
            </div>
            <div className={styles.countryContainer}>
                {countryList.map((country, index) => { return (
                    <CountryCard
                    key={index}
                    index={index + 1}
                    flag={country.flags.png}
                    officialName={country.name.official}
                    commonName={country.name.common}
                    filterAttr={country.filterValue}
                    />
                )})}
                {countryList.length <= 0 &&
                    <div className={styles.notFound}>
                        <p className="not-found">{`No Country met your search input on filter: ${filterAttr}...`}</p>
                    </div>
                }
            </div>
        </div>
    )
    
}

export default CountryList