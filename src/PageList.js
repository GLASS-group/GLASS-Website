import Construction from "./Construction";
import Home from './Home';
import News from "./News";
import Documentation from "./Documentation";
import ProjectMaterials from "./ProjectMaterials";

const pages = [{title: "Home", content: <Home/>, path: '/home'},
               {title: "Project Materials", content:<ProjectMaterials/>, path: '/project-materials'},
               {title: "News", content:<News/>, path: '/news'},
               {title: "Documentation", content:<Documentation/>, path: '/documentation'},
               {title: "About Us", content:<Construction/>, path: '/about-us'}]

export default pages;