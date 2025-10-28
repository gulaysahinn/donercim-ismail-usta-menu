import React from 'react';
import MenuItem from './MenuItem';

function MenuCategory({ category }) {
  return (
    <div className="mb-12">
      <h2
        id={category.slug} // İŞTE BURASI! Linkin hedefi (örn: id="tavuk-doner")
        className="text-3xl font-bold text-orange-500 border-b-2 border-orange-500 pb-2 mb-8 
                   scroll-mt-24" // scroll-mt-24: Tıklanınca yapışkan menünün başlığı kapatmasını engeller
      >
        {category.category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuCategory;