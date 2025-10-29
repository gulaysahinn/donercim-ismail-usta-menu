// 'import React' satırını kaldırdık
import { menuData } from '../data/menuData'; // Artık .ts dosyasından import ediyor
import MenuCategory from './MenuCategory';

function Menu() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* 'category' artık otomatik olarak 'IMenuCategory' tipinde olacak */}
      {menuData.map((category) => (
        <MenuCategory key={category.category} category={category} />
      ))}
    </div>
  );
}

export default Menu;
