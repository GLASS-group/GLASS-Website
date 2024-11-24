import style from "./consts/Style";
import { colors } from "./consts/Style";
import {Link, NavLink} from "react-router-dom";
import { createUseStyles } from "react-jss";
import { mergeJson } from "./templates/MergeJson";
import { releases } from "./consts/Releases";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from "./Footer";
import useMobile from "./templates/Mobile";
import useTopOfPage from "./templates/TopOfPage";

function Download() {

    const isMobile = useMobile();
    useTopOfPage();

    const classes = createUseStyles(mergeJson(style, thisStyle))();
    return (
        <div className={classes.mainBody}>
            <NavbarHeader/>
            <article className={isMobile ? classes.pageContentMobile : classes.pageContent}>
                <h1 className={classes.pageContentHeader}>Download</h1>
                <div className={classes.releaseList}>
                    <div>
                        <div className={classes.releaseInfoContainer}>
                            <div className={isMobile ? classes.releaseInfoRowMobile : classes.releaseInfoRow}>
                                <h1 className={isMobile ? classes.releaseNameMobile : classes.releaseName}>{releases[0].releaseName}</h1>
                                <Link className={classes.releaseDownloadButton} to={releases[0].filePath}
                                      target="_blank" download={releases[0].fileName}>Download</Link>
                            </div>
                            <h3 className={classes.releaseDate}>Released on {releases[0].releaseDate}</h3>
                        </div>
                        <h2 className={classes.releaseNotesHeader}>Release Notes</h2>
                        <div className={classes.releaseNotes}>
                            {releases[0].releaseNotes}
                            {releases[0].patchNotesPath ?
                                <h3>
                                    The full list of patch notes can be found <Link to={releases[0].patchNotesPath} target="_blank" download={releases[0].patchNotesName}>here</Link>
                                </h3>
                                : null }
                        </div>
                    </div>
                </div>
                <h3 className={classes.previousVersionMessage}>Previous versions of GLASS can be found <NavLink to={'/archive/download'} key={'archive-download'} className={classes.inlineLink}>here</NavLink></h3>
            </article>
            <Footer/>
        </div>
)
}

const thisStyle = {
    releaseList: {
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid white',
        width: '100%',
        textAlign: 'left',
        padding: '2rem 2rem',
        margin: '2rem 4rem',
        boxSizing: 'border-box'
    },
    releaseInfoRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    releaseInfoRowMobile : {
        composes : '$releaseInfoRow',
        flexDirection : 'column',
        alignItems : 'flex-start'
    },
    releaseInfoContainer : {
        paddingBottom: '1.2rem',
        borderBottom: '2px solid white',
        display : 'flex',
        flexDirection : 'column',
        width: 'max(50%, 40rem)',
        maxWidth: '100%'
    },
    releaseName : {
        fontSize : '2rem',
        margin : '0rem',
        marginRight : '2.5rem'
    },
    releaseNameMobile: {
        composes : '$releaseName',
        marginBottom : '1.25rem'
    },
    releaseDownloadButton : {
        padding : '0.4rem 0.8rem',
        border : '1px solid white',
        borderRadius : '0.4rem',
        color : colors.white,
        borderColor : colors.white,
        textDecoration : 'none',
        '&:hover' : {
            color : colors.mint,
            borderColor : colors.mint
        }
    },
    releaseDate : {
        fontWeight : 400,
        marginTop : '1rem',
        margin : 0
    },
    releaseNotesHeader : {
        fontSize : '1.4rem',
        fontWeight : '400',
        marginTop : '1.5rem',
        marginBottom : '1rem'
    },
    releaseNotes : {
        '& li' : {
            margin : '0.15rem 0'
        },
        '& a' : {
            color : colors.mint,
            textDecoration : 'none',
            '&:hover' : {
                textDecoration : 'underline',
                cursor : 'pointer'
            }
        },
        '& h3' : {
            fontSize : '1.25rem',
            fontWeight: 450
        }
    },
    previousVersionMessage : {
        fontSize : '1.25rem',
        fontWeight : '400',
        marginTop : '1rem',
        marginBottom : '3rem',
        '& a' : {
            color : colors.mint,
            textDecoration : 'none',
            '&:hover' : {
                textDecoration : 'underline',
                cursor : 'pointer'
            }
        }
    }
}

export default Download;