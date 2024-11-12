import style from "./consts/Style";
import { createUseStyles } from "react-jss";
import { mergeJson } from "./templates/MergeJson";

function Footer() {
    const classes = createUseStyles(mergeJson(style, thisStyle))();
    return (
        <div className={classes.navFooter}>
            <h1>GLASS</h1>
            <p>Copyright 2024 - Tommy Galletta, Alexander Lockard</p>
        </div>
    )
}

const thisStyle = {
    navFooter: {
        composes: '$globalFontSize',
        width : '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        alignItems: 'center',
        padding: '0.5em',
        marginTop: 'auto',
        borderTop: 'dotted',
        borderWidth: '4px',
        '& h1, & p' : {
            margin : '0.6rem 0',
            textAlign : 'center'
        }
    }
}

export default Footer;