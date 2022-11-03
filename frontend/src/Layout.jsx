import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import { Navbar, Dropdown } from 'flowbite-react';
import RDNavLink from './utilities/RDNavLink';

// import your route components too
import App from './components/App';
import Home from './components/Home';
import ReduxSample from './components/ReduxSample';
import Error from './components/Error';

// Language 
import { useTranslation } from "react-i18next";
import i18next from "i18next";

// import icons
import { default as flagEn } from './assets/images/lang-en-flag.svg';
import { default as flagTh } from './assets/images/lang-th-flag.svg';

const languageMap = {
    en: (<>
        <img src={flagEn} className="mr-2 w-5 h-5 rounded-full" />
        English
    </>),
    th: (<>
        <img src={flagTh} className="mr-2 w-5 h-5 rounded-full" />
        ภาษาไทย
    </>),
};

function SelectLangauge() {
    const { t, i18n } = useTranslation("common");
    return (<Dropdown
        label={ languageMap[i18n.language] }
        inline={true}>
        <Dropdown.Item onClick={() => i18next.changeLanguage("en")}>
            { languageMap['en'] }
        </Dropdown.Item>
        <Dropdown.Item onClick={() => i18next.changeLanguage("th")}>
            { languageMap['th'] }
        </Dropdown.Item>
    </Dropdown>);
}

function TopNavbar() {
    const { t, i18n } = useTranslation("common");
    return (<Navbar
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
            <SelectLangauge />
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <RDNavLink to="/" text={ t("home_nav_btn") } />
            <RDNavLink to="/app" text="App" />
            <RDNavLink to="/redux-sample" text="ReduxSample" />
            <RDNavLink to="/error" text="Error" />
        </Navbar.Collapse>
    </Navbar>);
}

export default function () {
    return (<>
        <BrowserRouter>
            <TopNavbar />
            <Outlet />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/redux-sample" element={<ReduxSample />} />
                <Route path="/error" element={<Error />} />
            </Routes>
        </BrowserRouter>,
    </>);
}