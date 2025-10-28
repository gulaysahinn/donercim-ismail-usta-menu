import React from 'react';
import { menuData } from '../data/menuData'; // Verimizi import ediyoruz
import MenuCategory from './MenuCategory';

function Menu() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {menuData.map((category) => (
        <MenuCategory key={category.category} category={category} />
      ))}
    </div>
  );
}

export default Menu;