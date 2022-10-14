import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App'


ReactDOM.render(<App /> , document.getElementById('root'));

document.getElementById('CorreoCliente').onchange = function(){

    var correoCliente = document.getElementById('CorreoCliente').value;
    console.log(correoCliente)
    document.getElementById('formularioDatos').setAttribute('action' , "https://formsubmit.co/" + correoCliente);

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
