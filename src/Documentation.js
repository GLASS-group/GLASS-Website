import Construction from "./Construction";
import style from "./Style";

import { createUseStyles } from "react-jss";

function Documentation() {
    const classes = createUseStyles(style)();
    return(
        <article className={classes.pageContent}>
            <h1 className={classes.pageContentHeader}>Documentation</h1>
            <Construction/>
        </article>
    )
}
export default Documentation;