import style from "./consts/Style";
import { colors } from "./consts/Style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { mergeJson } from "./templates/MergeJson";
import { releases } from "./consts/Releases";

const MOBILE_WIDTH = 1100

function Download() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_WIDTH)
  
    const handleResize = () => {
          setIsMobile(window.innerWidth < MOBILE_WIDTH)
    }
    
    useEffect(() => {
      window.addEventListener("resize", handleResize)
    })

    const classes = createUseStyles(mergeJson(style, thisStyle))();
    return(
        <article className={classes.pageContent}>
            <h1 className={classes.pageContentHeader}>Download</h1>
            <div className={classes.releaseList}>
            {
                releases.map((release) => (
                    <div>
                        <div className={isMobile ? classes.releaseInfoRowMobile : classes.releaseInfoRow}>
                            <h1 className={isMobile ? classes.ConstructionreleaseNameMobile : classes.releaseName}>{release.releaseName}</h1>
                            <Link className={classes.releaseDownloadButton} to={release.filePath} target="_blank" download={release.fileName}>Download</Link>
                        </div>
                        <h2 className={classes.realeaseNotesHeader}>Release Notes</h2>
                        <div>{release.releaseNotes}</div>
                    </div>
                ))
            }
            </div>
        </article>
    )
}

const thisStyle = {
    releaseList : {
        display : 'flex',
        flexDirection : 'column',
        borderTop : '2px dashed white',
        width : '70%',
        textAlign : 'left',
        padding : '2rem 4rem',
        margin : '2rem 0rem'
    },
    releaseInfoRow : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'flex-end',
        borderBottom : '2px solid white',
        paddingBottom : '1.5rem',
        width : 'max(50%, 40rem)',
        maxWidth : '100%'      
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
        marginBottom : '1rem'
    },
    releaseDownloadButton : {
        padding : '0.4rem 0.8rem',
        border : '1px solid white',
        borderRadius : '0.4rem',
        color : 'white',
        textDecoration : 'none',
        '&:hover' : {
            color : colors.mint,
            borderColor : colors.mint
        }
    },
    realeaseNotesHeader : {
        fontSize : '1.4rem',
        fontWeight : '400',
        marginTop : '1.5rem',
        marginBottom : '1rem'
    }
}

export default Download;