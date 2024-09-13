import style from "./consts/Style";
import { createUseStyles } from "react-jss";
import { mergeJson } from "./templates/MergeJson";

function Footer({override}) {
    const classes = createUseStyles(override ? mergeJson(style, override) : style)();
    return (
        <div className={classes.navFooter}>
            <h1>GLASS</h1>
        </div>
    )
}

export default Footer;