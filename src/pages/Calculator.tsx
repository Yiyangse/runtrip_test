import React, { useState } from 'react';

const Calculator: React.FC = () => {
  // 상태 훅 선언
  const [likeCount, setLikeCount] = useState(0); // 좋아요 수 상태
  const [speed, setSpeed] = useState(''); // 속도 입력 상태
  const [pace, setPace] = useState<string | null>(null); // 페이스 계산 결과 상태

  // 좋아요 버튼 클릭 핸들러
  const handleLikeClick = () => setLikeCount(likeCount + 1);

  // 속도 입력 변화 핸들러
  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSpeed(e.target.value);

  // 페이스 계산 함수
  const calculatePace = () => {
    if (Number(speed) > 0) {
      setPace((60 / Number(speed)).toFixed(2)); // 속도를 페이스로 변환
    } else {
      setPace(null); // 유효하지 않은 속도일 경우 null로 설정
    }
  };

  // 외부 링크 네비게이션 함수
  const navigateToPaceCalculator = () =>
    window.open('http://marathon.pe.kr/pds/pace_calculator.html', '_blank');

  return (
    <div className='text-center'>
      {/* 페이스 계산기 섹션 */}
      <div className='mt-6 p-6 bg-gray-100 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl'>
        <h3 className='text-2xl mb-4'>
          쉬운 페이스 계산기 <span onClick={handleLikeClick}>좋아요👍</span>
          {likeCount}
        </h3>
        <div className='converter'>
          <h5 className='text-xl font-bold mb-4'>
            ✍️러닝머신 속도를 입력해볼까요?
          </h5>
          <input
            type='number'
            value={speed}
            onChange={handleSpeedChange}
            placeholder='Speed (km/h) e.g., 10'
            className='p-2 mr-2 border rounded'
          />
          <button
            onClick={calculatePace}
            className='bg-orange-600 text-white border-none p-2 rounded transition duration-300 hover:bg-orange-600 hover:text-white'
          >
            바꾸기
          </button>
          {pace && (
            <h5 className='text-xl mt-4'>Running Pace: {pace} min/km</h5>
          )}
          <div className='mt-4'>
            <h5 className='text-xl font-bold mb-2'>대회 목표 페이스 구하기</h5>
            <button
              className='bg-blue-500 text-white p-2 rounded transition duration-300 hover:bg-blue-700'
              onClick={navigateToPaceCalculator}
            >
              마라톤 온라인 계산기
            </button>
          </div>
          <p className='mt-4'>@yiyangse</p>
          <hr className='my-4' />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
