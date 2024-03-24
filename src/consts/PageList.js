import Construction from "../Construction";
import Home from '../Home';
import News from "../News";
import Documentation from "../Documentation";
import ProjectMaterials from "../ProjectMaterials";
import AboutUs from "../AboutUs";

const pages = [{title: "Home", content: <Home/>, path: '/home'},
               {title: "Project Materials", content:<ProjectMaterials/>, path: '/project-materials'},
               {title: "News", content:<News/>, path: '/news'},
               {title: "Documentation", content:<Documentation/>, path: '/documentation'},
               {title: "About Us", content:<AboutUs/>, path: '/about-us'}]

export default pages;