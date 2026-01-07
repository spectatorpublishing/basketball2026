// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import GeneralArticles from './pages/GeneralArticles';
import WomenArticles from './pages/WomenArticles';
import MenArticles from './pages/MenArticles';
import AllArticles from './pages/AllArticles'

function App() {
  return (
<div>
  <ScrollToTop/>
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<AllArticles />} /> 
            <Route path="/general" element={<GeneralArticles />} />
            <Route path="/women-basketball" element={<WomenArticles />} />
            <Route path="/men-basketball" element={<MenArticles />} />
    </Routes>
</div>

  );
}

export default App;