// ... importlar
import Navbar from './components/Navbar';
import Header from './components/Header';
import Menu from './components/Menu';
import { menuData } from './data/menuData';

function App() {
  return (

    <div className="min-h-screen bg-main-bg bg-cover bg-fixed">
      {/* - bg-main-bg: tailwind.config.js'de tanımladığımız resim
        - bg-cover: Resmin tüm ekranı kaplamasını sağlar
        - bg-fixed: Biz sayfayı kaydırırken arka planın sabit kalmasını (parallax efekti) sağlar
      */}

      <Header />
      <Navbar menuData={menuData} />
      <main>
        <Menu />
      </main>
      
      <footer className="text-center p-4 text-gray-500 border-t border-gray-800 mt-8 
                         bg-gray-950/50 backdrop-blur-sm"> 
        {/* Footer'a da saydamlık ekledik */}
        Fiyatlarımıza tüm vergiler dahildir.
        <br />
        © 2025 Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

export default App;