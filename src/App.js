import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { routes } from './router'
import LayoutBox from './pages/layout'
import Login from './pages/login'

function App() {
  return (
    <div className="App">
      {/* 遍历routes，生成路由 */}
      <Routes>
        <Route path="/" element={<LayoutBox />}>
          {
            routes.map((item, index) => 
              item.path === '' ?
              <Route key={index} index element={item.component} /> :
              <Route key={index} path={item.path} element={
                <React.Suspense fallback={<>...</>}>
                  {item.component}
                </React.Suspense>
              } />
            )
          }
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
