import Construction from "./Construction";
import style from "./consts/Style";

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