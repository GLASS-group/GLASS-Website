import React from 'react';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { mergeJson } from './MergeJson';
import MissingPfp from './images/missing_pfp.png'
import defaultStyles from './consts/DefaultStyles';
import PersonInfoOverlay from './PersonInfoOverlay';

function PersonInfoCard({style, info}) {

    const styles = createUseStyles(style ? mergeJson(defaultStyleDefs, style) : defaultStyleDefs)();
    const [showAbout, setShowAbout] = useState(false)

    const showMoreInfo = () => {
        setShowAbout(true)
    }

    return (
        <div>
            { showAbout ? <PersonInfoOverlay exitStateFunction={setShowAbout} info={info}/> : null }
            <div className={styles.infoCard}>
                { info.name ? <h3 className={styles.cardName}>{info.name}</h3> 
                            : <h3 className={styles.cardName}>Unnamed Member</h3> }
                { info.subtitle ? <h4 className={styles.cardSubtitle}>{info.subtitle}</h4> 
                                : null }
                { info.image ? <img src={info.image} className={styles.cardImage}/> 
                             : <img src={MissingPfp} className={styles.cardImage}/>}
                <button className={styles.cardAboutButton} onClick={showMoreInfo}>View Profile</button>
            </div>
        </div>
    )

}

export default PersonInfoCard;


const defaultStyleDefs = {
    infoCard : {
        boxSizing : 'border-box',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '20rem',
        height : '26rem',
        borderRadius : '0.5rem',
        border : 'solid',
        borderWidth : '1px',
        borderColor: 'lightGray',
        padding : '1.5rem 0',
        margin : '1rem',
        transition : 'transform 0.2s, box-shadow 0.2s',
        '&:hover' : {
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 3px 12px',
            transform : 'translateY(-3px)'
        }
    },
    cardName : {
        fontSize : '1.6rem',
        fontWeight : 400,
        margin : 0
    },
    cardSubtitle : {
        margin : 0,
        marginTop : '0.5rem',
        fontSize : '1.05rem',
        fontWeight : 400,
        textAlign : 'center'
    },
    cardImage : {
        borderRadius : '50%',
        width : '70%',
        marginTop : 'auto',
        marginBottom : '1rem'
    },
    cardAboutButton : defaultStyles.textButton
}