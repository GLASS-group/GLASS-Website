import React from 'react';
import { createUseStyles } from 'react-jss';
import { mergeJson } from './MergeJson';
import defaultStyles from './consts/DefaultStyles';

function PersonInfoCard({style, exitStateFunction, info}) {

    const styles = createUseStyles(style ? mergeJson(defaultStyleDefs, style) : defaultStyleDefs)();

    const hideInfo = () => {
        exitStateFunction(false)
    }

    return (
        <div className={styles.fullscreenOverlay}>
            <div className={styles.infoOverlay}>
                <div className={styles.infoHeader}>
                { info.image ? <img src={info.image} className={styles.headerImage}/> 
                             : null}
                <div className={styles.headerText}>
                    { info.name ? <h2 className={styles.headerName}>{info.name}</h2> 
                            : <h2 className={styles.headerName}>Unnamed Member</h2> }
                    { info.subtitle ? <h4 className={styles.headerSubtitle}>{info.subtitle}</h4> 
                                : null }
                </div>
                
                
                <button className={styles.infoExitButton} onClick={hideInfo}>X</button>
                </div>
                <div className={styles.infoDescription}>
                    { info.description ? info.description : null }
                </div>
            </div>
        </div>
    )

}

export default PersonInfoCard;

const defaultStyleDefs = {
    fullscreenOverlay : {
        position : 'fixed',
        top : '50%',
        left : '50%',
        transform: 'translate(-50%, -50%)',
        width : '100%',
        height : '100%',
        zIndex : 100,
        backgroundColor : 'transparent',
        boxShadow: 'inset rgba(0, 0, 0, 0.45) 0px 0px 12vw 12vw'
    },
    infoOverlay : {
        position : 'fixed',
        display : 'flex',
        flexDirection : 'column',
        top : '50%',
        left : '50%',
        transform: 'translate(-50%, -50%)',
        width : '80vw',
        height : '80vh',
        backgroundColor : 'white',
        borderRadius : '1.5rem',
        alignItems : 'center',
    },
    infoHeader : {
        display: 'flex',
        boxSizing: 'border-box',
        flexDirection : 'row',
        alignItems : 'center',
        width : '100%',
        padding : '1.5rem 2rem',
        borderBottom : '1px solid lightGray'
    },
    headerText : {
        display : 'flex',
        flexDirection : 'column'
    },
    headerName : {
        margin : '0.5rem 0 0.5rem 0',
        fontSize : '2rem'
    },
    headerSubtitle : {
        margin : 0,
        marginTop : '0.5rem',
        fontSize : '1.05rem',
        fontWeight : 400,
        textAlign : 'center'
    },
    headerImage : {
        borderRadius : '50%',
        width : '8rem',
        marginRight : '3rem',
        '@media screen and (max-width: 900px)': {
            display: 'none'
        }
    },
    infoExitButton : defaultStyles.exitButton,
    infoDescription : {
        boxSizing : 'border-box',
        width : '100%',
        marginBottom : '2rem',
        padding : '0 3rem',
        overflow : 'auto',
        '& a' : {
            color : 'crimson',
            textDecoration : 'none',
            '&:hover' : {
                textDecoration : 'underline'
            }
        },
        '& ul' : {
            margin : '0.5rem'
        }
    }
}