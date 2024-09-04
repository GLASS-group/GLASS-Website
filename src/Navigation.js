import { createUseStyles } from "react-jss";
import style from "./consts/Style";
import glassSvg from './images/glass_logo.svg'
import { NavLink } from "react-router-dom";

const useStyles = createUseStyles(style);

const pageTitle = "Inventory Management System";

function Navigation({pages}) {
  const classes = useStyles();

  function temp() {
    console.log('The "temp()" function was called');
  }


  return (
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

export default Navigation;
