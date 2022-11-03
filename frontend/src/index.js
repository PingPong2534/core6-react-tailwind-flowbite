import React from 'react';
import ReactDOM from 'react-dom/client';

//Redux
import { Provider } from 'react-redux'
import SampleStore from './stores/SampleStore'

import './index.css';
import Layout from './Layout';

import reportWebVitals from './reportWebVitals';

//Using Language
import './localization/i18nextInit'

import * as serviceWorker from './serviceWorker';

import ErrorBoundary from './utilities/ErrorBoundary';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={SampleStore}>
                <Layout />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
