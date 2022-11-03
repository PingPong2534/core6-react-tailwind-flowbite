import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import { Navbar, Button } from 'flowbite-react';
import RDNavLink from './utilities/RDNavLink';

// import your route components too
import App from './components/App';
import Home from './components/Home';
import ReduxSample from './components/ReduxSample';

const TopNavbar = () => (<Navbar
    fluid={true}
    rounded={true}
>
    <Navbar.Brand href="https://flowbite.com/">
        <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
        </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
        <Button>
            Get started
        </Button>
        <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
        <RDNavLink to="/" text="Home" />
        <RDNavLink to="/app" text="App" />
        <RDNavLink to="/redux-sample" text="ReduxSample" />
        <RDNavLink to="/contact" text="Contact" />
    </Navbar.Collapse>
</Navbar>);

export default function () {
    return (<>
        <BrowserRouter>
            <TopNavbar />
            <Outlet />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/redux-sample" element={<ReduxSample />} />
            </Routes>
        </BrowserRouter>,
    </>);
}