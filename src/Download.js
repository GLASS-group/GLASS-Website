import style from "./consts/Style";
import { colors } from "./consts/Style";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { mergeJson } from "./templates/MergeJson";
import { releases } from "./consts/Releases";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from "./Footer";
import useMobile from "./templates/Mobile";

function Download() {

    const isMobile = useMobile();

    const classes = createUseStyles(mergeJson(style, thisStyle))();
    return (
        <div className={classes.mainBody}>
            <NavbarHeader/>
            <article className={isMobile ? classes.pageContentMobile : classes.pageContent}>
                <h1 className={classes.pageContentHeader}>Download</h1>
                <div className={classes.releaseList}>
                    {
                        releases.map((release) => (
                            <div>
                                <div className={isMobile ? classes.releaseInfoRowMobile : classes.releaseInfoRow}>
                                    <h1 className={isMobile ? classes.releaseNameMobile : classes.releaseName}>{release.releaseName}</h1>
                                    <Link className={classes.releaseDownloadButton} to={release.filePath}
                                          target="_blank" download={release.fileName}>Download</Link>
                                </div>
                                <h2 className={classes.releaseNotesHeader}>Release Notes</h2>
                                <div className={classes.releaseNotes}>
                                    {release.releaseNotes}
                                    {release.patchNotesPath ?
                                        <h3>
                                            The full list of patch notes can be found <Link to={release.patchNotesPath} target="_blank" download={release.patchNotesName}>here</Link>
                                        </h3>
                                        : null }
                                </div>
                            </div>
                        ))
                    }
                </div>
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
        alignItems: 'flex-end',
        borderBottom: '2px solid white',
        paddingBottom: '1.5rem',
        width: 'max(50%, 40rem)',
        maxWidth: '100%'
    },
    releaseInfoRowMobile : {
        composes : '$releaseInfoRow',
        flexDirection : 'column',
        alignItems : 'flex-start'
    },
    releaseName : {
        fontSize : '2rem',
        margin : '0rem',
        marginRight : '2.5rem',
        
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
    releaseNotesHeader : {
        fontSize : '1.4rem',
        fontWeight : '400',
        marginTop : '1.5rem',
        marginBottom : '1rem'
    },
    releaseNotes : {
        marginBottom : '5rem',
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
            fontWeight: 500
        }
    }
}

export default Download;