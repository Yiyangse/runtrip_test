import React from 'react';

interface FooterProps {
  navigateToBlog: () => void;
}

const Footer: React.FC<FooterProps> = ({ navigateToBlog }) => (
  <footer className="bg-orange-300 text-white p-4 text-center mt-4">
    <button
      className="bg-white text-orange-500 border-2 border-coral rounded px-4 py-2 font-bold transition duration-300 hover:bg-coral hover:text-white"
      onClick={navigateToBlog}
    >
      @yiyangse
    </button>
  </footer>
);

export default Footer;
