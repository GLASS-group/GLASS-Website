import { createUseStyles } from "react-jss";
import style from "./consts/Style";
import glassSvg from './images/glass_logo.svg'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { mergeJson } from "./templates/MergeJson";
import  menuPng  from './images/menu.png';
import xPng from './images/x.png';
import { colors } from './consts/Style';

function Navigation({pages}) {
  const classes = createUseStyles(mergeJson(style, mobileView))();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)
  const [showMenu, setShowMenu] = useState(false)

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  }
 
  //choose the screen size 
  const handleResize = () => {
        setIsMobile(window.innerWidth < 1000)
        if (!isMobile) setShowMenu(false)
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  function temp() {
    console.log('The "temp()" function was called');
  }


  return isMobile ? (
    <header className={classes.mobileHeader}>
        <NavLink className={classes.navMainLogo} to='/home'>
            <img className={classes.mainLogoImage} src={glassSvg}/>
            <h1 className={classes.mainLogoLabel}>GLASS</h1>
        </NavLink>
        <a className={classes.mobileHeaderMenu} onClick={toggleShowMenu}>
            <img className={classes.menuImage} src={menuPng}/>
        </a>
        { showMenu ? 
            <div className={classes.mobileNavMenu}>
                <a className={classes.mobileHeaderMenuClose} onClick={toggleShowMenu}>
                    <img className={classes.menuImage} src={xPng}/>
                </a>
                <ul className={classes.navHeaderMenuMobile}>
                 {pages.map((page) => (
                   <NavLink onClick={() => {setShowMenu(false)}} to={page.path} key={page.path} className={({isActive}) => ( isActive ? classes.navActiveHeaderItemMobile : classes.navHeaderItemMobile)}>
                       {page.title}
                   </NavLink>
                 ))}
                </ul>
            </div> : null }
    </header>
  ) : (
    <header className={classes.navHeader}>
        <NavLink className={classes.navMainLogo} to='/home'>
            <img className={classes.mainLogoImage} src={glassSvg}/>
            <h1 className={classes.mainLogoLabel}>GLASS</h1>
        </NavLink>
      <ul className={classes.navHeaderMenu}>
        {pages.map((page) => (
          <NavLink to={page.path} key={page.path} className={({isActive}) => ( isActive ? classes.navActiveHeaderItem:classes.navHeaderItem)}>
              {page.title}
          </NavLink>
        ))}
      </ul>
    </header>
  );
}

const mobileView = {
    mobileHeader : {
        display: 'flex',
        border:'solid',
        borderWidth: '0 0 2px 0',
        alignItems: 'center',
        padding: '1em',
    },
    mobileHeaderMenu : {
        display : 'inline-block',
        marginLeft : 'auto',
        marginRight : '0.5rem',
        padding : '0rem',
        height : '4rem',
        width : '4rem',
        '&:hover' : {
            cursor : 'pointer'
        }
    },
    mobileHeaderMenuClose : {
        composes : "$mobileHeaderMenu",
        display : 'block',
        margin : '1rem',
        marginLeft : 'auto',
        marginRight : '1.5rem',
        padding : '0rem',
        height : '4rem',
        width : '4rem',
        '&:hover' : {
            cursor : 'pointer'
        }
    },
    menuImage : {
        width : '100%',
    },
    mobileNavMenu : {
        position: 'absolute',
        top: '0',
        left: '0',
        width : '100%',
        height : '100%',
        backgroundColor : '#000000F6'
    },
    navHeaderMenuMobile : {
        display : 'block',
        padding : '0',
        margin : '0',
        paddingTop : '0.5rem'
    },
    navHeaderItemMobile : {
        display : 'block',
        color : colors.white,
        textDecoration : 'none',
        margin : '1rem',
        padding : '0.5rem 0',
        border : '1px solid white',
        borderRadius : '0.5rem',
        textAlign : 'center',
        fontSize : '1.35rem',
        '&:hover' : {
            color : colors.mint,
            borderColor : colors.mint
        }
    },
    navActiveHeaderItemMobile : {
        composes : "$navHeaderItemMobile"
    }
}


export default Navigation;
