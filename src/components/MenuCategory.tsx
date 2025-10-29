// 'import React' satırını kaldırdık
import type {IMenuCategory}  from '../types/types'; // Kendi tipimizi import ettik
import MenuItem from './MenuItem';

// Prop olarak gelen 'category'nin tipini belirttik
function MenuCategory({ category }: { category: IMenuCategory }) {
  return (
    <div className="mb-12">
      <h2
        id={category.slug}
        className="text-3xl font-bold text-orange-500 border-b-2 border-orange-500 pb-2 mb-8 
                   scroll-mt-24"
      >
        {category.category}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* 'item' artık otomatik olarak 'IMenuItem' tipinde olacak */}
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuCategory;
