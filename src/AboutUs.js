import style, {colors} from "./consts/Style";
import devInfo from "./consts/DevInfo";
import VerticalBreak from "./templates/VeritcalBreak";

import { createUseStyles } from "react-jss";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from "./Footer";
import {mergeJson} from "./templates/MergeJson";
import useMobile from "./templates/Mobile";
import {useState} from "react";
import HorizontalBreak from "./templates/HorizontalBreak";
import xPng from "./images/x.png";

function AboutUs() {
    const classes = createUseStyles(mergeJson(style, thisStyle))();

    const isMobile = useMobile();
    const [showBio, setShowBio] = useState(false);
    const [currentBio, setCurrentBio] = useState(null);

    if (!isMobile && showBio) {
        setShowBio(false);
    }

    const showInfo = (info) => {
        setShowBio(true)
        setCurrentBio(info);
    }

    const devCardList = () => {
        let list = []
        if (isMobile) {
            devInfo.forEach((info) => {
                list.push(
                    <div className={classes.devBioCardMobile}>
                        <HorizontalBreak style={{horizontalBreak: {margin: 0}}}/>
                        <h2>{info.name}</h2>
                        <img className={classes.devCardImage} src={info.image}/>
                        <a className={classes.showDevInfoButton} onClick={() => showInfo(info)}>About Me</a>
                    </div>
                )
            });
        } else {
            devInfo.forEach((info, index) => {
                if (index > 0) list.push(<VerticalBreak/>)
                list.push(
                    <div className={classes.devBioCard}>
                        <div>
                            <h2>{info.name}</h2>
                            {info.bio.map((paragraph) => (<p className={classes.bioParagraph}>{paragraph}</p>))}
                        </div>
                        <img className={classes.devCardImage} src={info.image}/>
                    </div>
                )
            });
        }
        return list
    }

    return (
        <div className={classes.mainBody}>
            {
                showBio ?
                    <div className={classes.devInfoBackgroundMobile}>
                        <div className={classes.devInfoContainerMobile}>
                            <a className={classes.closeDevInfoMobile} onClick={() => setShowBio(false)}>
                                <img className={classes.menuIcon} src={xPng}/>
                            </a>
                            <div className={classes.devBioOverlay}>
                                <h2>{currentBio.name}</h2>
                                {currentBio.bio.map((paragraph) => (<p className={classes.bioParagraph}>{paragraph}</p>))}
                                <img className={classes.devCardImage} src={currentBio.image}/>
                            </div>
                        </div>
                    </div>
                    : null
            }
            <NavbarHeader/>
            <article className={classes.pageContent}>
                <h1 className={classes.pageContentHeader}>About Us</h1>
                <div className={isMobile ? classes.devCardListMobile : classes.devCardList}>
                    {
                        devCardList()
                    }
                </div>
            </article>
            <Footer/>
        </div>

    )
}

const thisStyle = {
    devCardList: {
        margin : '2rem 0 4rem 0',
        display: "flex",
        flexDirection: 'row',
        width : '120%',
        height : '48rem',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    devCardListMobile: {
        composes : '$devCardList',
        flexDirection : 'column',
        height : 'auto',
        margin : '2rem 0 0 0'
    },
    devBioCard: {
        borderRadius: '2rem',
        display: 'flex',
        flexDirection: 'column',
        columnGap: '2rem',
        rowGap: '2rem',
        alignItems: 'center',
        justifyContent: 'start',
        height : '100%',
        width : '45%',
        '& h2' : {
            margin: 0,
            fontSize: '2rem'
        }
    },
    devBioCardMobile : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems: 'center',
        '& h2' : {
            fontSize: '2rem',
            margin : 0,
            marginTop : '2rem'
        }
    },
    devCardImage: {
        boxSizing: 'border-box',
        width: '18rem',
        borderRadius: '50%',
        margin : '2rem 0',
    },
    showDevInfoButton : {
        borderRadius: '0.5rem',
        fontSize: '1.25rem',
        padding : '0.4rem 0.8rem',
        border : '1px solid white',
        margin : '2rem 0 3rem 0',
        '&:hover' : {
            borderColor : colors.mint,
            color : colors.mint,
            cursor : 'pointer'
        }
    },
    devInfoBackgroundMobile: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: colors.overlayBackground
    },
    closeDevInfoMobile: {
        display: 'block',
        marginLeft: 'auto',
        margin : '1.5rem 1.5rem 1rem auto',
        padding: '0rem',
        height: '3rem',
        width: '3rem',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    menuIcon: {
        width: '100%',
    },
    devInfoContainerMobile : {
        display: 'flex',
        flexDirection: 'column',
        height : '100%'
    },
    devBioOverlay : {
        height: '100%',
        marginRight : '0.2rem',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        overflowY: 'auto',
        textAlign: 'center',
        padding : '0 10%',
        '& h2' : {
            margin: '0 0 1.5rem 0',
            fontSize : '2rem'
        },
        '&::-webkit-scrollbar' : {
            width : '6px',
            transform : 'translateX(-20px)'
        },
        '&::-webkit-scrollbar-thumb' : {
            width : '5px',
            backgroundColor : colors.darkGray,
            padding : '5px',
            borderRadius : '3px'
        }
    }
}

export default AboutUs;