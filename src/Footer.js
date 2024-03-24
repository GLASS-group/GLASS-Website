import style from "./consts/Style";
import { createUseStyles } from "react-jss";

function Footer() {
    const classes = createUseStyles(style)();
    return (
        <div className={classes.navFooter}>
            <h1>GLASS</h1>
        </div>
    )
}

export default Footer;