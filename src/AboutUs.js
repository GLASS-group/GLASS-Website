import Construction from "./Construction";
import style from "./Style";

import { createUseStyles } from "react-jss";

function AboutUs() {
    const classes = createUseStyles(style)();
    return(
        <article className={classes.pageContent}>
            <h1 className={classes.pageContentHeader}>About Us</h1>
            <Construction/>
        </article>
    )
}
export default AboutUs;