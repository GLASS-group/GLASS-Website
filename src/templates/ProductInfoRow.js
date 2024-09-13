import React from 'react';
import { createUseStyles } from 'react-jss';
import { mergeJson } from './MergeJson';
import defaultStyles from './consts/DefaultStyles';
import HorizontalBreak from './HorizontalBreak';
import { NavLink } from 'react-router-dom';

const ROW_HEIGHT_REM = 28

const scrollTop = () => {
      window.scrollTo(0, 0);
  };

function ProductInfoRow({style, info}) {

    const styles = createUseStyles(style ? mergeJson(defaultStyleDefs, style) : defaultStyleDefs)();


    return (
        <div className={styles.productRow}>
            <HorizontalBreak style={{horizontalBreak : {width : '100%'}}}/>
                 
                    <div className={styles.rowSeparator}>
                        <div className={styles.productInfo}>
                            <h2 className={styles.productName}>{info.name ? info.name : "Unnamed Project"}</h2>
                            <h3 className={styles.productSubtitle}>{info.subtitle}</h3>
                            <div className={styles.productDescription}>{info.description}</div>
                            { info.learnMorePage ? 
                                (
                                    info.offSite ? 
                                        <a href={info.learnMorePage} className={styles.productMoreButton}>Learn More</a>
                                        : <NavLink to={info.learnMorePage} key={info.learnMorePage} 
                                            className={styles.productMoreButton} onClick={scrollTop}>Learn More</NavLink>
                                ) : null }
                        </div>
                        { info.image ? <img src={info.image} className={styles.productImage}/> : null }
                    </div>
            
        </div>
    )

}

export default ProductInfoRow;


const defaultStyleDefs = {
    productRow : {
        boxSizing : 'border-box',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '85%',
        height : `${ROW_HEIGHT_REM}rem`,
        borderRadius : '0.5rem'
    },
    rowSeparator : {
        display : 'flex',
        width : '95%',
        height : `${ROW_HEIGHT_REM - 4}rem`
    },
    productInfo : {
        display : 'flex',
        flexDirection : 'column',
        flex : 1,
        alignItems : 'center'
    },
    productName : {
        fontSize : '2rem',
        fontWeight : 500,
        margin : 0,
        marginRight : 'auto'
    },
    productSubtitle : {
        margin : 0,
        marginTop : '0.5rem',
        fontSize : '1.25rem',
        fontWeight : 400,
        marginRight : 'auto'
    },
    productImage : {
        margin : 'auto 0 auto 4rem',
        borderRadius : '50%',
        height : '30vw',
        maxHeight : '100%',
        '@media screen and (max-width: 900px)': {
            display: 'none'
        }
    },
    productDescription : {
        boxSizing : 'border-box',
        width : '100%',
        borderTop : '1px solid lightGray',
        marginBottom : '2rem',
        marginTop : '1rem',
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
    },
    productMoreButton : mergeJson(defaultStyles.textButton, { marginTop : 'auto' })
}