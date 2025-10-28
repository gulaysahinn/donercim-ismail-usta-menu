import React from 'react';


function MenuItem({ item }: { item: any }) { 
  return (
    <div className="flex flex-col rounded-lg overflow-hidden shadow-lg 
                   transition-all duration-300 hover:shadow-2xl 
                   
                   bg-gray-900/70 backdrop-blur-sm 
                   border border-gray-700/50">

      {/* Resim Alanı */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={item.image || '/images/placeholder.jpg'}
          alt={item.name}
        />
        {/* Fiyat Rozeti */}
        <div className="absolute top-0 right-0 bg-orange-600 text-white font-bold py-1 px-3 m-2 rounded-full shadow-md">
          ₺{item.price}
        </div>
      </div>
      {/* İçerik Alanı */}
      <div className="p-4 flex flex-col flex-grow">
        
        <h4 className="text-xl font-bold text-white mb-1">{item.name}</h4>
        {/* Ağırlık Bilgisi */}
        <div className="mt-auto"> 
          {item.weight && (
            <p className="text-xs text-gray-500">{item.weight}</p>
          )}
        </div>
        {/* Açıklama Alanı */}
        <p className="text-sm text-gray-400 mb-3 flex-grow">
          {item.description || "Lezzetli bir seçim!"}
        </p> 
        
       
        </div>
        
      </div>
  );
}

export default MenuItem;