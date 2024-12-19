import React, { useState } from "react"
import styles from './Dropdown.module.css'

const Dropdown = ({ choices, onSelect }) => {

    const [selectedValue, setSelectedValue] = useState(choices[0])

    const handleChange = (event) => {
        const newValue = event.target.value
        setSelectedValue(newValue)
        onSelect(newValue)
    };

    return (
        <select
        value={selectedValue}
        onChange={handleChange}
        className={styles.box}>
            {choices.map((choice, index) => (
            <option key={index} value={choice}>
                {choice}
            </option>
            ))}
        </select>
    );
};

export default Dropdown;
