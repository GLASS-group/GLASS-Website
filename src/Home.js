import Construction from "./Construction";
import style from "./consts/Style";
import { Link } from "react-router-dom";
import Glass0_1_0a from './releases/GLASS-0.1.0a.zip'

import { createUseStyles } from "react-jss";

function Home() {
    const classes = createUseStyles(style)();
    return(
        <article className={classes.pageContent}>
            <h1 className={classes.pageContentHeader}>Home</h1>
            <Construction/>
        </article>
    )
}
export default Home;