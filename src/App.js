import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import {pages} from "./consts/NavbarPages";
import history from "./History";
import Home from "./Home";
import ProjectMaterials from "./ProjectMaterials";
import News from "./News";
import Download from "./Download";
import {projectFiles} from "./consts/Files";
import React from "react";
import Documentation from "./Documentation";
import AboutUs from "./AboutUs";

function App() {
    return <BrowserRouter history={history}>
        <Routes>
            <Route key='home' path="/home" element ={<Home/>}/>
            <Route key='projectMaterials' path="/project-materials" element ={<ProjectMaterials/>}/>
            <Route key='news' path="/news" element ={<News/>}/>
            <Route key='news' path="/news/:articleId" element ={<News/>}/>
            <Route key='download' path="/download" element ={<Download/>}/>
            <Route path="/documentation" element={<Documentation/>}/>
            <Route path="/documentation/:page" element={<Documentation/>}/>
            <Route key='aboutUs'  path="/about-us" element = {<AboutUs/>}/>
            {
                projectFiles.map((file) => (<Route key={file.href} element={file.href}/>))
            }

            <Route path="*" element={<Navigate to="/home" replace={true}/>}/>
        </Routes>
    </BrowserRouter>

}

export default App;
