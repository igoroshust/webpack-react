/* Index.js берёт начальный компонент App и подвяжет его к id=root */

import React from "react";
import ReactDOM from "react-dom"; /* для рендеринга компонента */
import 'bootstrap/dist/css/bootstrap.min.css'; /* стили для таблицы */
import App from "./components/App"; /* импорт компонента */

ReactDOM.render(<App/>, document.getElementById("root")); /* подвязываем компонент к root */