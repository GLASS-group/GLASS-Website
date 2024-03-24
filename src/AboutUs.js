import style from "./consts/Style";
import devInfo from "./consts/DevInfo";


import { createUseStyles } from "react-jss";

function AboutUs() {
    const classes = createUseStyles(style)();
    return(
        <article className={classes.pageContent}>
            <div className={classes.finalContentSubsection}>
                <h1 className={classes.mainHeader}>About Us</h1>
                {
                    devInfo.map((info) => (
                        <div className={classes.devBioCard}>
                            <div>
                                <h2 className={classes.devCardName}>
                                    {info.name}
                                </h2>
                                {info.bio.map((paragraph) => (<p className={classes.bioParagraph}>{paragraph}</p>))}
                            </div>
                            <img className={classes.devCardImage} src={info.image}/>
                        </div>
                    ))
                }
            </div>
        </article>
    )
}
export default AboutUs;