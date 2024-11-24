import {createUseStyles} from "react-jss";
import style, {colors} from "./consts/Style";
import glassSvg from './images/glass_logo.svg'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {mergeJson} from "./templates/MergeJson";
import menuPng from './images/menu.png';
import xPng from './images/x.png';
import useMobile from "./templates/Mobile";
import useTopOfPage from "./templates/TopOfPage";



function Navigation({pages}) {

    const isMobile  = useMobile();

    const classes = createUseStyles(mergeJson(style, thisStyle))();

    const [showMenu, setShowMenu] = useState(false);



    if (!isMobile && showMenu) {
        setShowMenu(false);
    }

    return  <header className={classes.navHeader}>
                <NavLink className={isMobile ? classes.navMainLogoMobile : classes.navMainLogo} to='/home'>
                    <img className={classes.mainLogoImage} src={glassSvg}/>
                    <h1 className={classes.mainLogoLabel}>GLASS</h1>
                </NavLink>
                    <div className={isMobile ? classes.menuBarLeft : classes.hidden}>
                        <a className={classes.navHeaderMenuIcon} onClick={() => setShowMenu(true)}>
                            <img className={classes.menuIcon} src={menuPng}/>
                        </a>
                            <div className={ showMenu ? classes.navMenuBackgroundMobile : classes.hidden}>
                                <a className={classes.navMobileMenuClose} onClick={() => setShowMenu(false)}>
                                    <img className={classes.menuIcon} src={xPng}/>
                                </a>
                                <ul className={classes.navMenuListMobile}>
                                    { pages.map((page) =>
                                        <NavLink onClick={() => setShowMenu(false)} to={page.path} key={page.path}
                                                className={ ({isActive}) => isActive ? classes.navActiveHeaderItemMobile : classes.navHeaderItemMobile }>
                                            {page.title}
                                        </NavLink>
                                    ) }
                                </ul>
                            </div>
                    </div>
                    <ul className={isMobile ? classes.hidden : classes.navHeaderMenu}>
                        { pages.map((page) =>
                            <NavLink to={page.path} key={page.path}
                                     className={({isActive}) => (isActive ? classes.navActiveHeaderItem : classes.navHeaderItem)}>
                                {page.title}
                            </NavLink>
                        ) }
                    </ul>
            </header>
}

const thisStyle = {
    navHeader: {
        display: 'flex',
        border:'solid',
        borderWidth: '0 0 2px 0',
        alignItems: 'center',
        padding: '1em',
        boxSizing: 'border-box',
        width : '100%'
    },
    navMainLogo: {
        display: 'flex',
        color: colors.white,
        textDecoration: 'none',
        marginLeft: '0.5rem',
        alignItems: 'center',
        transition: 'transform 0.25s',
        '&:hover': {
            transform: "translateY(-0.15em)  scale(1.03)",
            cursor: 'pointer'
        }
    },
    mainLogoImage: {
        composes: '$globalFontSize',
        width: '4rem',
        height: '4rem'
    },
    mainLogoLabel: {
        composes: '$globalFontSize',
        display: 'inline',
        margin: 0,
        marginLeft: '0.2em',
        fontSize: '3em',
        fontWeight: '500',
        verticalAlign: 'middle',
        textDecoration: 'none',
    },
    navHeaderMenu: {
        margin: 0,
        marginLeft: 'auto',
        marginRight: '.7rem',
        padding: 0
    },
    navHeaderItem: {
        display: 'inline-block',
        color: colors.lightGray,
        margin: '.7rem',
        border: 'solid',
        borderRadius: '.4rem',
        borderWidth: '1px',
        padding: '.5rem 1rem',
        textDecoration: 'none',
        transition: 'transform 0.15s, color .35s',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
            transform: 'translateY(-0.15rem)',
            color: colors.mint
        }
    },
    navActiveHeaderItem: {
        composes:'$navHeaderItem',
        color: colors.white
    },
    navMainLogoMobile : {
        'composes' : '$navMainLogo',
        '&:hover': {
            transform: "translateY(0)  scale(1)",
        }
    },
    menuBarLeft: {
        display: 'flex',
        width: '100%'
    },
    navHeaderMenuIcon: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: '0.5rem',
        padding: '0rem',
        height: '3rem',
        width: '3rem',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    navMobileMenuClose: {
        composes : '$navHeaderMenuIcon',
        display: 'block',
        margin : '1.5rem 1.5rem 1rem auto'
    },
    menuIcon: {
        width: '100%',
    },
    navMenuBackgroundMobile: {
        zIndex : '10',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: colors.overlayBackground
    },
    navMenuListMobile: {
        display: 'block',
        padding: '0',
        margin: '0',
        paddingTop: '0.5rem'
    },
    navHeaderItemMobile: {
        display: 'block',
        color: colors.lightGray,
        textDecoration: 'none',
        margin: '1rem 2rem',
        padding: '0.5rem 0',
        border: '1px solid',
        borderColor: colors.lightGray,
        borderRadius: '0.5rem',
        textAlign: 'center',
        fontSize: '1.35rem',
        '&:hover': {
            color: colors.mint,
            borderColor: colors.mint
        }
    },
    navActiveHeaderItemMobile: {
        composes: "$navHeaderItemMobile",
        color: colors.white,
        borderColor: colors.white
    },

}


export default Navigation;
