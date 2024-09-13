import { Link } from "react-router-dom";
import style from "./consts/Style";
import { createUseStyles } from "react-jss";



function Construction() {
    const classes = createUseStyles(style)();
    return (
        <div className={classes.constructionMessage}>
            <em>This website is still in progress... please pardon our dust!</em>
            <h3 className={classes.constructionPrompt}>Looking for our project materials (presentations, requirements document, etc.)? Look <Link 
            to='/project-materials' className={classes.constructionLink}>here</Link>!</h3>
        </div>
    )
}

export default Construction;