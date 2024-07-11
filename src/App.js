import React, { useState } from 'react';
import './App.css';
import { images } from './data/image';
// 변수명 영어로 바꾸기
// useState 쓸 때엔 set함수
// header footer 로 만들기
// props class
// tailwind 는 추가할 부분만 !
// '글제목변경' is assigned a value but never used
// '함수' is defined but never used
function App() {
  let [글제목, 글제목변경] = useState([
    '페이스계산기',
    '대회 일정',
    '런트립 추천여행지',
  ]);
  let [count, setCount] = useState(0);
  let [speed, setSpeed] = useState('');
  let [pace, setPace] = useState(null);

  function 함수() {
    return 100;
  }

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };
  //pace 변수 다시 생각해보기
  const calculatePace = () => {
    if (speed > 0) {
      const pace = (60 / speed).toFixed(2);
      setPace(pace);
    } else {
      setPace(null);
    }
  };
  //링크를 변수화 시켜보기
  const navigateToBlog = () => {
    window.location.href = 'https://blog.naver.com/yiyangse';
  };

  const navigateToPaceCalculator = () => {
    window.open('http://marathon.pe.kr/pds/pace_calculator.html', '_blank');
  };

  const marathonOnline = () => {
    window.open('http://www.marathon.pe.kr/index_calendar.html');
  };

  const posting = () => {
    window.open('https://blog.naver.com/yiyangse/223409222234');
  };

  return (
    <div className='App'>
      <div className='orange-nav'>
        <div>
          <h1>런트립!</h1>
          <p>취미는 성장</p>
          <button className='navigateToBlog' onClick={navigateToBlog}>
            블로그로 이동
          </button>
        </div>
      </div>
      {/* 변수이름  직관적이게 */}
      <div className='list'>
        <h3>
          {글제목[0]} <span onClick={handleClick}>👍</span>
          {count}
        </h3>

        <div className='converter'>
          <h5>트레드밀 페이스 변환이 필요하신가요?</h5>
          <input
            type='number'
            value={speed}
            onChange={handleSpeedChange}
            placeholder='속도(km/h) 예시)10'
          />
          <button onClick={calculatePace}>변환</button>
          {pace && <h5>러닝 페이스: {pace} km/min</h5>}
          <div className='pace-calculator'>
            <h5>대회 페이스 산출이 필요하신가요?</h5>
            <button
              className='navigateToPaceCalculator'
              onClick={navigateToPaceCalculator}
            >
              대회 페이스 계산기
            </button>
          </div>
          <p>@yiyangse</p>
          <hr />
        </div>
      </div>

      <div className='list'>
        <h3>{글제목[1]}</h3>
        <h5>🍂가을의 전설이 되는 날까지</h5>
        <div className='marathonOnline'>
          <button className='marathonOnline' onClick={marathonOnline}>
            공식일정
          </button>
        </div>
        <p>@yiyangse</p>
        <hr />
      </div>

      <div className='list'>
        <h3>{글제목[2]}</h3>
        <h5>✨new! 런트립 후기 </h5>
        <div className='posting'>
          <button className='posting' onClick={posting}>
            여행후기
          </button>
        </div>
        <p>@yiyangse</p>
      </div>

      <div className='image-gallery'>
        {images.map((image, index) => (
          <div key={index} className='card'>
            <img src={image.src} alt={image.title} className='card-img' />
            <div className='card-body'>
              <h5 className='card-title'>{image.title}</h5>
              <p className='card-text'>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
