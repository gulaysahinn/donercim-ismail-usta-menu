function Header() {
  return (
    <header className="bg-gray-900/70 backdrop-blur-sm text-white p-6 shadow-md text-center sticky top-0 z-50">
      {/* Navbar'ın da saydam olması için Header'ı da saydam yaptım */}
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-orange-500">
          DÖNERCİM İSMAİL USTA
        </h1>
        <p className="text-xl text-gray-300">
          ET & MANGAL
        </p>
        <p className="text-sm italic text-gray-400 mt-2">
          Made with Love, Served with Proud
        </p>
      </div>
    </header>
  );
}

export default Header;