import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import history from './History';
import pages from './PageList';
import { projectFiles } from './Files';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter history={history}>
    <Routes>
    {
        pages.map((page) => {
            return <Route key={page.path} path={page.path} element={<App/>} />
        })
    }
    {
        projectFiles.map((file) => (<Route key={file.href} element={file.href}/>))
    }
    <Route
      path="*"
      element={<Navigate to="/home" replace={true} />}
    />
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
