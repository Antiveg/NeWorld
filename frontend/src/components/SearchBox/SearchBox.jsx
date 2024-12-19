import React, { useState } from "react"
import styles from './SearchBox.module.css'
import '../../global.css'

const SearchBox = ({ input, placeholder, onChange }) => {

    const [newInput, setNewInput]  = useState('')

    const handleChange = (event) => {
        const value = event.target.value
        setNewInput(value)
        onChange(value)
    }

    return (
        <input
        type="text"
        value={newInput}
        placeholder={placeholder}
        onChange={handleChange}
        className={styles.box}
        />
    )
}

export default SearchBox