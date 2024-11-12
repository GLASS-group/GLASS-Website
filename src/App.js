import {useLocation} from "react-router-dom";
import {pages} from "./consts/NavbarPages";

function App() {
    const location = useLocation();

    let currentPath = location.pathname;
    const currentPage = pages.find(page => page.path === currentPath);
    return currentPage.content;

}

export default App;
