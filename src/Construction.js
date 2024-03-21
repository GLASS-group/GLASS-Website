import { Link } from "react-router-dom";
import pages from "./PageList";
import style from "./Style";
import { createUseStyles } from "react-jss";



function Construction() {
    const classes = createUseStyles(style)();
    return (
        <div className={classes.constructionMessage}>
            <em>This website is still in progres... please pardon our dust!</em>
            <h3 className={classes.constructionPrompt}>Looking for our project materials (presentations, requirements document, etc.)? Look <Link 
            to='/project-materials' className={classes.constructionLink}>here</Link>!</h3>
        </div>
    )
}

export default Construction;