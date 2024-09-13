import React from 'react';
import { createUseStyles } from 'react-jss';
import { mergeJson } from './MergeJson';
import { NavLink } from "react-router-dom";
import defaultStyles from './consts/DefaultStyles';

function NavbarHeader({style, logo, logoLabel, navOptions, active, highlightActive=true}) {

    const styles = createUseStyles(style ? mergeJson(defaultStyleDefs, style) : defaultStyleDefs)();

    const highlight = highlightActive ? active : null

    return (
        <header className={styles.navHeader}>
            {
                logo || logoLabel ? (
                    <NavLink className={styles.navLogo} to='/'>
                        { logo ? <img src={logo} className={styles.navLogoImage}/> : null }
                        { logoLabel ? <h1 className={styles.navLogoLabel}>{logoLabel}</h1> : null }
                    </NavLink>
                 ) : null
            }
            {
                navOptions ? <ul className={styles.navHeaderMenu}>{
                    navOptions.map((option) => (
                        <NavLink to={option.path} key={option.path} className={option === highlight ? styles.activeNavItem : styles.navItem}>
                            {option.title}
                        </NavLink>
                    ))
                }</ul> : null
            }
        </header>
      );
}

export default NavbarHeader;

const defaultStyleDefs = {
    navHeader : {
        backgroundColor: 'white',
        boxSizing: 'border-box',
        width : '100%',
        height : '7rem',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0px 3px 8px',
        display: 'flex',
        flexDirection : 'row',
        alignItems: 'center',
        padding: '1rem 1.5rem 1rem 1.5rem',
        '@media screen and (max-width: 900px)': {
            flexDirection : 'column',
            height : 'auto'
        },
        
    },
    navLogo : {
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center',
        transition: 'transform 0.25s',
        height: '100%',
        '&:hover': {
            transform: "translateY(-0.1rem)  scale(1.02)",
            cursor: 'pointer'
        },
        '@media screen and (max-width: 900px)': {
            flexDirection : 'column',
            marginBottom : '2rem',
            '&:hover': {
                transform: "translateY(0)  scale(1)",
            }
        }
    },
    navLogoImage : {
        maxHeight : '100%',
        '@media screen and (max-width: 900px)': {
            display: 'block',
            maxWidth : '80%',
            alignItems : 'center',
            margin:0
        }
    },
    navLogoLabel: {
        color : 'black',
        display: 'flex',
        display: 'inline',
        margin: 0,
        marginLeft: '0.7rem',
        fontSize: '3rem',
        fontWeight: '500',
        verticalAlign: 'middle',
        textDecoration: 'none',
        all : 'unset',
        '@media screen and (max-width: 900px)': {
            display: 'inline-block',
            margin:0
        }
    },
    navHeaderMenu: {
        margin: 0,
        marginLeft: 'auto',
        marginRight: '1rem',
        padding: 0,
        color: 'black',
        '@media screen and (max-width: 900px)': {
            display: 'block',
            margin:0
        }
    },
    navItem : defaultStyles.hoverTextButton,
    activeNavItem : {
        composes : '$navItem',
        position : 'relative',
        display : 'inline-block',
        color : '#CA1551',
    }
}
