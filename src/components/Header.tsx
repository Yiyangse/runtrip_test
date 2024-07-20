import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  navigateToBlog: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigateToBlog }) => {
  const [activeButton, setActiveButton] = useState(0);
  const buttons = ['계산기', '대회일정', '추천코스', '러닝후기'];
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveButton(
        (prevActiveButton) => (prevActiveButton + 1) % buttons.length
      );
    }, 1000); // 1초마다 색상 변경

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index: number) => {
    switch(index) {
      case 0:
        navigate('/calculator');
        break;
      case 1:
        navigate('/schedule');
        break;
      case 2:
        navigate('/recommend');
        break;
      case 3:
        navigate('/reviews');
        break;
      default:
        break;
    }
  };

  return (
    <div className='w-full text-white text-xl flex flex-col items-center'>
      <div className='text-center my-4'>
        <h1 className='text-xl font-bold'>런 트립!</h1>
        <h5 className='text-xs mt-2'>가장 나다운 달리기🏃</h5>
        <button
          className='bg-orange-500 text-coral rounded px-4 py-2 font-bold mt-2 transition duration-300 hover:bg-orange-600 hover:text-white'
          onClick={navigateToBlog}
        >
          블로그 바로가기
        </button>
      </div>
      <header className='flex justify-center space-x-4 p-4 w-full'>
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`p-2 rounded transition duration-300 ${
              activeButton === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => handleButtonClick(index)} // 버튼 클릭 시 handleButtonClick 호출
          >
            {button}
          </button>
        ))}
      </header>
    </div>
  );
};

export default Header;
