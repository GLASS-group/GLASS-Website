import Construction from "./Construction";
import {style, colors} from "./consts/Style";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from './Footer';
import glassSvg from './images/glass_logo.svg'
import { createUseStyles } from "react-jss";
import {mergeJson} from "./templates/MergeJson";
import {NavLink} from "react-router-dom";
import useMobile from "./templates/Mobile";
import useTopOfPage from "./templates/TopOfPage";

function Home() {
    const classes = createUseStyles(mergeJson(style, thisStyle))();
    const isMobile  = useMobile();
    useTopOfPage();

    return(
        <div className={classes.mainBody}>
            <NavbarHeader/>
            <article className={classes.pageContent}>
                <h1 className={classes.pageContentHeader}>GLASS</h1>
                <h2 className={classes.pageSubheader}>Generalized Language Abstraction and Scripting System</h2>
                <div className={isMobile ? classes.imageContainerMobile : classes.imageContainer}>
                    <img className={classes.homePageImage} src={glassSvg}/>
                </div>
                <div>
                    <p className={classes.homePageInfo}>Download GLASS <NavLink to={'/download'} key={'download'} className={classes.homeInfoLink}>here</NavLink></p>
                    <p className={classes.homePageInfo}>Read the latest GLASS news <NavLink to={'/news'} key={'news'} className={classes.homeInfoLink}>here</NavLink></p>
                </div>
                <div className={classes.padding}></div>
            </article>
            <Footer/>
        </div>
    )
}

const thisStyle = {
    pageSubheader : {
        margin : 0,
        fontWeight : 400
    },
    homePageImage : {
        width : '35rem',
        maxWidth : '100%',
        height : 'auto',
        animationIterationCount : 'infinite',
        animationDuration : '10s',
        animationTimingFunction : 'ease-in-out',
        animationName : '$logoSpin'
    },
    imageContainer : {
        perspective : '1200px'
    },
    imageContainerMobile : {
        perspective : '600px'
    },
    '@keyframes logoSpin':  {
        '0%'  : {
            transform : 'rotateY(0deg)'
        },
        '25%' : {
            transform : 'rotateY(179.9deg)'
        },
        '50%' : {
            transform : 'rotateY(179.9deg)'
        },
        '75%' : {
            transform : 'rotateY(359.8deg)'
        },
        '100%' : {
            transform : 'rotateY(359.8deg)'
        },
    },
    homePageInfo : {
        fontSize : '1.25rem'
    },
    homeInfoLink : {
        color : colors.mint,
        textDecoration : 'none',
        '&:hover' : {
            cursor : 'pointer',
            textDecoration : 'underline',
        }
    },
    padding : {
        padding : '1rem'
    }
}

export default Home;