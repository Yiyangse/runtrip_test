import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainContent from './components/MainContent.tsx';
import './styles/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './pages/board/index.tsx';

const App: React.FC = () => {
  const navigateToBlog = () => {
    window.location.href = 'https://blog.naver.com/yiyangse';
  };

  return (
    <Router>
      <div className="text-center font-namumsquare">
        <Header navigateToBlog={navigateToBlog} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/board" element={<Board />} />
        </Routes>
        <Footer navigateToBlog={navigateToBlog} />
      </div>
    </Router>
  );
};

export default App;
