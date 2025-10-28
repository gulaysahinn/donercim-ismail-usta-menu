import React from 'react';

// 'menuData' prop'unun tipini .tsx için ekleyelim
// (Eğer .jsx kullanıyorsanız ': { menuData: any }' kısmını silebilirsiniz)
function Navbar({ menuData }: { menuData: any[] }) { 
  return (
    <nav className="sticky top-0 z-50 shadow-md 
                   bg-gray-900/70 backdrop-blur-sm 
                   border-b border-gray-700/50">
      {/*
        YENİ DEĞİŞİKLİKLER (NAV ETİKETİ):
        - bg-gray-900'ü -> bg-gray-900/70 (%70 opaklık) olarak değiştirdik.
        - backdrop-blur-sm: Kartlardaki gibi "buzlu cam" efekti ekledik.
        - border-b border-gray-700/50: Üstte yapışık dururken alttan hafif bir çizgiyle ayrışması için ekledik.
      */}
      
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 overflow-x-auto py-3">
          {/*
            YENİ DEĞİŞİKLİKLER (İÇERİDEKİ DİV):
            - justify-center: Linkleri yatayda ortalamak için bu sınıfı ekledik.
            - overflow-x-auto: Mobilde linkler sığmazsa yana kaydırma özelliğini koruduk.
          */}
          
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