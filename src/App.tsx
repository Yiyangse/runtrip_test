import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainContent from './components/MainContent.tsx';
import './styles/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './pages/board/index.tsx';

// 새로운 페이지 컴포넌트 임포트
import Calculator from './pages/Calculator.tsx';
import Schedule from './pages/Schedule.tsx';
import Recommend from './pages/Recommend.tsx';
import Reviews from './pages/Reviews.tsx';

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
          {/* 새로운 경로 추가 */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer navigateToBlog={navigateToBlog} />
      </div>
    </Router>
  );
};

export default App;
