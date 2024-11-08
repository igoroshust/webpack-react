import React, {Component} from "react";
import "../styles/Header.css";

let buttonName = "Some button";

const handleClick = () => {
    console.log('Вы кликнули по кнопке!');
}

class Header extends Component {
    render() {
        return (
            <header>This is header
                <button className={"some-button"} onClick={handleClick}>{buttonName}</button>
            </header>
        )
    }
}

export default Header;