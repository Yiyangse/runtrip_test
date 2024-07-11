import React from 'react';

interface HeaderProps {
  navigateToBlog: () => void;
}

const Header: React.FC<HeaderProps> = ({ navigateToBlog }) => (
  <div className="bg-coral w-full flex text-white text-xl">
    <div>
      <h1 className="text-xl font-bold ">런 트립!</h1>
      <br/>
      <h5 className="text-xs ">가장 나다운 달리기🏃</h5>
      <button
        className="bg-orange-500 text-coral rounded px-4 py-2 font-bold mt-2 transition duration-300 hover:bg-orange-600 hover:text-white"
        onClick={navigateToBlog}
      >블로그 바로가기
      </button>
    </div>
  </div>
);

export default Header;
