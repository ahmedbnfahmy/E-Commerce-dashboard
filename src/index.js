import React from "react";
import ReactDOM from  'react-dom'; // this is only file use this import 
import './index.css';
import App from './App';
import { ContextProvider } from "./context/contextProvider";
ReactDOM.render(
<ContextProvider>
<App/>

</ContextProvider>,
document.getElementById('root'))

