import Construction from "./Construction";
import style from "./consts/Style";

import { createUseStyles } from "react-jss";

function News() {
    const classes = createUseStyles(style)();
    return(
        <article className={classes.pageContent}>
            <h1 className={classes.pageContentHeader}>News</h1>
            <Construction/>
        </article>
    )
}
export default News;