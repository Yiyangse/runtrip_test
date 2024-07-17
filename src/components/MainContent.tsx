import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트를 임포트합니다.
import { images } from '../data/image.ts'; // 이미지 데이터를 임포트합니다.

const MainContent: React.FC = () => {
  // 상태 훅 선언
  const [likeCount, setLikeCount] = useState(0); // 좋아요 수 상태
  const [speed, setSpeed] = useState(''); // 속도 입력 상태
  const [pace, setPace] = useState<string | null>(null); // 페이스 계산 결과 상태
  const [showGallery, setShowGallery] = useState(false); // 이미지 갤러리 표시 상태
  const [imageLikes, setImageLikes] = useState<{ [key: string]: number }>({}); // 각 이미지의 좋아요 수 상태

  // 좋아요 버튼 클릭 핸들러
  const handleLikeClick = () => setLikeCount(likeCount + 1);

  // 속도 입력 변화 핸들러
  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => setSpeed(e.target.value);

  // 페이스 계산 함수
  const calculatePace = () => {
    if (Number(speed) > 0) {
      setPace((60 / Number(speed)).toFixed(2)); // 속도를 페이스로 변환
    } else {
      setPace(null); // 유효하지 않은 속도일 경우 null로 설정
    }
  };

  // 외부 링크 네비게이션 함수
  const navigateToPaceCalculator = () => window.open('http://marathon.pe.kr/pds/pace_calculator.html', '_blank');
  const navigateToRaceSchedule = () => window.open('http://www.marathon.pe.kr/index_calendar.html');
  const navigateToPost = () => window.open('https://blog.naver.com/yiyangse/223409222234');

  // 이미지 갤러리 표시 핸들러
  const handleShowGallery = () => setShowGallery(true);

  // 이미지 좋아요 클릭 핸들러
  const handleImageLikeClick = (id: string) => {
    setImageLikes((prevLikes) => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1,
    }));
  };

  return (
    <div className="text-center">
      {/* 페이스 계산기 섹션 */}
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl mb-4">
          쉬운 페이스 계산기 <span onClick={handleLikeClick}>좋아요👍</span>{likeCount}
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
            className="bg-orange-600 text-white border-none p-2 rounded transition duration-300 hover:bg-orange-600 hover:text-white"
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

      {/* 대회 일정 섹션 */}
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl mb-4">대회 일정</h3>
        <h5 className="text-lg mb-4">🍂 가을의 전설이 되는 날까지</h5>
        <div>
          <button
            className="bg-blue-500 text-white p-2 rounded transition duration-300 hover:bg-blue-700"
            onClick={navigateToRaceSchedule}
          >
            마라톤 온라인 대회일정
          </button>
        </div>
        <p className="mt-4">@yiyangse</p>
        <hr className="my-4" />
      </div>

      {/* "지친 일상 속, 나를 만나는 시간" 섹션 */}
      <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
        <h3 className="text-2xl mb-4">지친 일상 속, 나를 만나는 시간</h3>
        <h5 className="text-lg mb-4">✨New! Run Trip Reviews</h5>
        <div>
          <button
            className="bg-orange-600 text-white p-2 rounded transition duration-300 hover:bg-orange-800"
            onClick={navigateToPost}
          >
            글 읽기
          </button>
          <h5 className="text-lg mb-4">✍️방명록 남기기</h5>
          <div>
            <Link to="/board">
              <button className="bg-orange-600 text-white p-2 rounded transition duration-300 hover:bg-orange-800">
                Board
              </button>
            </Link>
          </div>
        </div>
        <p className="mt-4">@yiyangse</p>
        <hr className="my-4" />
        <div>
          <button
            className="bg-orange-600 text-white p-2 rounded transition duration-300 hover:bg-orange-800"
            onClick={handleShowGallery}
          >
            갤러리 보기
          </button>
        </div>
      </div>

      {/* 이미지 갤러리 섹션 */}
      {showGallery && (
        <div className="image-gallery opacity-100 transition-opacity duration-1000 ease-in-out mt-6 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-2xl mb-4">이미지 갤러리</h3>
          <div className="flex flex-wrap justify-center">
            {images.map((image, index) => (
              <div key={index} className="card m-5 max-w-xs shadow-lg rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="rounded-t-lg"
                />
                <div className="p-4">
                  <h5 className="text-lg font-bold">{image.title}</h5>
                  <p className="text-sm text-gray-700">{image.description}</p>
                  <button
                    className="mt-2 bg-blue-500 text-white p-2 rounded transition duration-300 hover:bg-blue-700"
                    onClick={() => handleImageLikeClick(index.toString())}
                  >
                    좋아요👍 {imageLikes[index.toString()] || 0}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
