import Home from '../Home';
import News from "../News";
import Documentation from "../Documentation";
import ProjectMaterials from "../ProjectMaterials";
import AboutUs from "../AboutUs";
import Download from "../Download";
import Navigation from "../Navigation";

export const pages = [{title: "Home", content: <Home/>, path: '/home'},
               {title: "Project Materials", content:<ProjectMaterials/>, path: '/project-materials'},
               {title: "News", content:<News/>, path: '/news'},
               {title: "Download", content:<Download/>, path : '/download'},
               {title: "Documentation", content:<Documentation/>, path: '/documentation'},
               {title: "About Us", content:<AboutUs/>, path: '/about-us'}]

export const NavbarHeader = () => <Navigation pages={pages}/>;

