/* Все компоненты собраны в App.js
App - это верхний уровень и внутри него подгружаются другие компоненты */

import React, {Component, Fragment} from "react";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
/* Название компонента = название файла. Получает свойства для создания компонента
Внутри каждого компонента должна быть функция render() */
    render() { /* render() возвращает JSX */
        return (
            <Fragment>
                <Header />
                <Main />
            </Fragment>
        );
    }
}

export default App;

