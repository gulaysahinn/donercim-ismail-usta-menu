import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-white p-6 shadow-md">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-500">
          DÖNERCİM İSMAİL USTA {/*  */}
        </h1>
        <p className="text-xl text-gray-300">
          ET & MANGAL {/* [cite: 2, 14] */}
        </p>
        <p className="text-sm italic text-gray-400 mt-2">
          Made with Love, Served with Proud {/* [cite: 4, 16] */}
        </p>
      </div>
    </header>
  );
}

export default Header;