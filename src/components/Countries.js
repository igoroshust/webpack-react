import React, { useState } from "react";
import axios from "axios";

function Countries() {
    const [countries, setCountries] = useState([]);

     /* Присылаем страны, если их ещё не было */
    if(!countries.length) {
            /* Получение списка стран */
    axios.get("https://restcountries.com/v3.1/all").then(res => {
        /* по .then получаем ответ (res - response) */
        console.log(res);
        setCountries(res.data);
    })
    }
    return (
        <table>
            <thead><tr><th>Name</th><th>Capital</th></tr></thead>
            <tbody>
                {countries.map(country => <tr>
                    <td>{country.name.common}</td>
                    <td>{country.capital}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default Countries;