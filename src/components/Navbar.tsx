
import type { IMenuCategory } from '../types/types'; // Kendi tipimizi import ettik

// Prop olarak gelen 'menuData'nın tipini belirttik
function Navbar({ menuData }: { menuData: IMenuCategory[] }) {
  return (
    <nav className="sticky top-0 z-50 shadow-md 
                   bg-gray-900/70 backdrop-blur-sm 
                   border-b border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 overflow-x-auto py-3">
          {/* 'category' artık otomatik olarak 'IMenuCategory' tipinde olacak */}
          {menuData.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="py-2 px-3 text-gray-300 font-medium rounded-md whitespace-nowrap
                         hover:bg-orange-600 hover:text-white
                         transition-colors duration-200"
            >
              {category.category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
