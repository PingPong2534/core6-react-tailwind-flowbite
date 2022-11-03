import React from 'react';
import ReactDOM from 'react-dom/client';

//Redux
import { Provider } from 'react-redux'
import SampleStore from './stores/SampleStore'

import './index.css';
import Layout from './Layout';

import reportWebVitals from './reportWebVitals';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={SampleStore}>
            <Layout />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
