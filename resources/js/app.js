import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/AppComponent';

if(document.getElementById('app')){
    ReactDOM.render(<App/>, document.getElementById('app'))
}