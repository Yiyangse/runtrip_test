import React, { useState } from 'react';
import { images, Image } from '../data/image.ts';

const MainContent: React.FC = () => {
  const [titles] = useState([
    '쉬운 페이스 계산기',
    '대회 일정',
    '런트립 추천 여행지',
  ]);
  const [likeCount, setLikeCount] = useState(0);
  const [speed, setSpeed] = useState('');
  const [pace, setPace] = useState<string | null>(null);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(e.target.value);
  };

  const calculatePace = () => {
    if (Number(speed) > 0) {
      const calculatedPace = (60 / Number(speed)).toFixed(2);
      setPace(calculatedPace);
    } else {
      setPace(null);
    }
  };

  const navigateToPaceCalculator = () => {
    window.open('http://marathon.pe.kr/pds/pace_calculator.html', '_blank');
  };

  const navigateToRaceSchedule = () => {
    window.open('http://www.marathon.pe.kr/index_calendar.html');
  };

  const navigateToPost = () => {
    window.open('https://blog.naver.com/yiyangse/223409222234');
  };

  return (
    <div className="text-center">
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl mb-4">
          {titles[0]} <span onClick={handleLikeClick}>좋아요👍</span>
          {likeCount}
        </h3>

        <div className="converter">
          <h5 className="text-xl font-bold mb-4">✍️러닝머신 속도를 입력해볼까요?</h5>
          <input
            type="number"
            value={speed}
            onChange={handleSpeedChange}
            placeholder="Speed (km/h) e.g., 10"
            className="p-2 mr-2 border rounded"
          />
          <button
            onClick={calculatePace}
            className="bg-orange-600 text-white border-none p-2 rounded transition duration-300 hover:bg-darkorange"
          >
            바꾸기
          </button>
          {pace && <h5 className="text-xl mt-4">Running Pace: {pace} min/km</h5>}
          <div className="mt-4">
            <h5 className="text-xl font-bold mb-2">대회 목표 페이스 구하기</h5>
            <button
              className="bg-blue-500 text-white p-2 rounded transition duration-300 hover:bg-blue-700"
              onClick={navigateToPaceCalculator}
            >
              마라톤 온라인 계산기
            </button>
          </div>
          <p className="mt-4">@yiyangse</p>
          <hr className="my-4" />
        </div>
      </div>

      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl mb-4">{titles[1]}</h3>
        <h5 className="text-lg mb-4">🍂 가을의 전설이 되는 날까지</h5>
        <div>
          <button
            className="bg-orange-400 text-white p-2 rounded transition duration-300 hover:bg-orange-600"
            onClick={navigateToRaceSchedule}
          >
            마라톤 온라인 공식 일정
          </button>
        </div>
        <p className="mt-4">@yiyangse</p>
        <hr className="my-4" />
      </div>

      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl mb-4">{titles[2]}</h3>
        <h5 className="text-lg mb-4">✨New! Run Trip Reviews</h5>
        <div>
          <button
            className="bg-orange-400 text-white p-2 rounded transition duration-300 hover:bg-orange-600"
            onClick={navigateToPost}
          >오동도 러닝 후기
          </button>
        </div>
        <p className="mt-4">@yiyangse</p>
      </div>

      <div className="flex flex-wrap justify-center mt-6">
        {images.map((image: Image, index: number) => (
          <div key={index} className="card m-5 max-w-xs shadow-lg rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
            <img src={image.src} alt={image.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-5">
              <h5 className="text-xl text-white mb-2">{image.title}</h5>
              <p className="text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
