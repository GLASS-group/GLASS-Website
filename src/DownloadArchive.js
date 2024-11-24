import style from "./consts/Style";
import { colors } from "./consts/Style";
import { NavLink, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { mergeJson } from "./templates/MergeJson";
import { releases } from "./consts/Releases";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from "./Footer";
import useMobile from "./templates/Mobile";
import {useState} from "react";
import xPng from "./images/x.png";
import useTopOfPage from "./templates/TopOfPage";

function DownloadArchive() {

    const isMobile = useMobile();
    useTopOfPage();
    const [mobileArchiveInfo, setMobileArchiveInfo] = useState(null);

    if (!isMobile && mobileArchiveInfo) {
        setMobileArchiveInfo(null);
    }

    const classes = createUseStyles(mergeJson(style, thisStyle))();
    return (
        <div className={classes.mainBody}>
            <NavbarHeader/>
            {
                mobileArchiveInfo ?
                    <div className={classes.overlayBackgroundMobile}>
                         <div className={classes.overlayContainerMobile}>
                             <a className={classes.closeOverlayMobile} onClick={() => setMobileArchiveInfo(false)}>
                                 <img className={classes.menuIcon} src={xPng}/>
                             </a>
                             <div className={classes.overlayReleaseInfoContainer}>
                                 <h1>{mobileArchiveInfo.releaseName}</h1>
                                 <h2>Released on {mobileArchiveInfo.releaseDate}</h2>
                                     {mobileArchiveInfo.patchNotesPath ?
                                         <Link className={classes.releaseDownloadButton} to={mobileArchiveInfo.patchNotesPath}
                                               target="_blank" download={mobileArchiveInfo.patchNotesName}>Download Patch
                                             Notes</Link>
                                         : null}
                                     <Link className={classes.releaseDownloadButton} to={mobileArchiveInfo.filePath}
                                           target="_blank"
                                           download={mobileArchiveInfo.fileName}>Download {mobileArchiveInfo.releaseName}</Link>
                                     <NavLink className={classes.releaseDownloadButton}
                                              to={`/archive/documentation/${mobileArchiveInfo.documentationPath}`}>View
                                         Documentation</NavLink>
                             </div>
                         </div>
                    </div>
                    : null
            }
            <article className={isMobile ? classes.pageContentMobile : classes.pageContent}>
                <h1 className={classes.pageContentHeader}>Archived Versions</h1>
                {
                    isMobile ?
                        <div className={classes.mobileArchivedReleaseList}>
                            {releases.map((release, index) => (
                                index === 0 ? null :
                                    <a className={classes.moreReleaseInfoButton}
                                       onClick={() => setMobileArchiveInfo(release)}>
                                        {release.releaseName}
                                    </a>
                            ))}
                        </div>
                        :
                        <table className={classes.archivedReleaseList}>
                            <thead>
                            <tr>
                                <th style={{width: '17%'}}>Version Name</th>
                                <th style={{width: '17%'}}>Release Date</th>
                                <th style={{width: '23%'}}>Patch Notes</th>
                                <th style={{width: '23%'}}>Download</th>
                                <th style={{width: '20%'}}>Documentation</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            releases.map((release, index) => (
                                index === 0 ? null :
                                <tr>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td>
                                        {release.patchNotesPath ?
                                            <Link className={classes.releaseDownloadButton} to={release.patchNotesPath}
                                                  target="_blank" download={release.patchNotesName}>Download Patch
                                                Notes</Link>
                                            : null}
                                    </td>
                                    <td>
                                        <Link className={classes.releaseDownloadButton} to={release.filePath}
                                              target="_blank"
                                              download={release.fileName}>Download {release.releaseName}</Link>
                                    </td>
                                    <td>
                                        <NavLink className={classes.releaseDownloadButton}
                                                 to={`/archive/documentation/${release.documentationPath}`}>View Documentation</NavLink>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                }
            </article>
            <Footer/>
        </div>
    )
}

const thisStyle = {
    archivedReleaseList: {
        borderTop: '1px solid white',
        width: '100%',
        minWidth : '65rem',
        textAlign: 'left',
        padding: '1rem 1rem',
        margin: '2rem 4rem',
        boxSizing: 'border-box',
        '& thead' : {
            height : '4rem',
            fontSize : '1.25rem'
        },
        '& tr' : {
            width : '100%',
            height : '3.5rem',
            alignItems : 'center'
        },
        '& th, & td' : {
            padding : '0 0.5rem'
        }
    },
    mobileArchivedReleaseList : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        marginTop : '1.5rem',
        width : '100%',
        borderTop: '1px solid white',
    },
    moreReleaseInfoButton : {
        composes : '$releaseDownloadButton',
        width : '70%',
        fontSize : '1.25rem',
        marginTop : '2rem'
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
        textAlign: 'center',
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
    },
    overlayBackgroundMobile: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: colors.overlayBackground
    },
    closeOverlayMobile: {
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
    overlayContainerMobile : {
        display: 'flex',
        flexDirection: 'column',
        height : '100%'
    },
    overlayReleaseInfoContainer : {
        display : 'flex',
        flexDirection : 'column',
        padding : '0 10%',
        boxSizing: 'border-box',
        width : '100%',
        '& h2' : {
            margin : 0,
            marginBottom : '2rem',
            fontWeight : 400
        },
        '& a' : {
            marginTop : '1.5rem',
            fontSize : '1.25rem'
        }
    }
}

export default DownloadArchive;