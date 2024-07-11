import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import MainContent from './components/MainContent.tsx';
import './styles/global.css';


const App: React.FC = () => {
  const navigateToBlog = () => {
    window.location.href = 'https://blog.naver.com/yiyangse';
  };

  return (
    <div className="text-center font-namumsquare">
      <Header navigateToBlog={navigateToBlog} />
      <MainContent />
      <Footer navigateToBlog={navigateToBlog} />
    </div>
  );
};

export default App;
