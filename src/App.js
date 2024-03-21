
import { createUseStyles } from 'react-jss';
import { useState } from "react";
import {Link, useLocation} from "react-router-dom";

import history from "./History";
import Navigation from "./Navigation";
import style from "./Style"
import pages from './PageList'
import Footer from './Footer'



function App() {
    const location = useLocation()
    const classes = createUseStyles(style)();

    let currentPath = location.pathname;
    const currentPage = pages.find(page => page.path === currentPath);

    console.log(currentPage);

    return (
        <div className={classes.mainBody}>
            <Navigation pages={pages}/>
            {currentPage.content}
            <Footer/>
        </div>
    );
}

export default App;
