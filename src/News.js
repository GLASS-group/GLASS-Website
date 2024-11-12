import Construction from "./Construction";
import style from "./consts/Style";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from './Footer';

import { createUseStyles } from "react-jss";

function News() {
    const classes = createUseStyles(style)();
    return (
        <div className={classes.mainBody}>
            <NavbarHeader/>
            <article className={classes.pageContent}>
                <h1 className={classes.pageContentHeader}>News</h1>
                <Construction/>
            </article>
            <Footer/>
        </div>
    )
}

export default News;