import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../styles/Country.css";

function Country(props) {
    const [selected, changeSelected] = useState(false);

    return (
        <tr className={ selected ? "selected-country": ""}>
            <td>{props.country.name.common}</td>
            <td>{props.country.capital}</td>
            <td>
                { selected ?
                    <Button variant="danger" onClick={() => changeSelected(false)}>Remove</Button> :
                    <Button variant="success" onClick={() => changeSelected(true)}>Add</Button>
                }
            </td>
        </tr>
    );
}

export default Country;