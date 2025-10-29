// Menüdeki tek bir ürünün yapısı
 export interface IMenuItem {
  name: string;
  weight: string | null; // Ağırlık bilgisi bazen olmayabilir (null)
  price: number;
  image: string;
  description: string;
}

// Bir menü kategorisinin yapısı (örn: "Dürümler")
export interface IMenuCategory {
  category: string;
  slug: string;
  items: IMenuItem[];
}
