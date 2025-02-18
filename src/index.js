import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CreatePost from './CreatePost';
import About from './About';
import Posts from './Posts';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<App />}/>
        <Route path="/create" element= {<CreatePost />}/>
        <Route path="/about" element= {<About />}/>
        <Route path="/posts" element={ <Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
