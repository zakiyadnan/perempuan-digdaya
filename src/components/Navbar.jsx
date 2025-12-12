import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/articles?keyword=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setMenuOpen(false); // tutup menu di mobile
    }
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wide text-gray-800 hover:text-pink-500 transition">
          Perempuan <span className="text-pink-400">Digdaya</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-pink-500 transition">Home</Link>
          <Link to="/articles" className="hover:text-pink-500 transition">Artikel</Link>
          <Link to="/about" className="hover:text-pink-500 transition">Tentang</Link>
          <Link to="/contact" className="hover:text-pink-500 transition">Kontak</Link>
          
          {/* Link Website Resmi */}
          <a
            href="https://perempuandigdaya.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            Website Resmi
          </a>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="ml-4 flex">
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-2 py-1 border rounded-l text-sm focus:outline-none"
            />
            <button type="submit" className="px-3 py-1 bg-pink-500 text-white rounded-r hover:bg-pink-600 transition">
              Cari
            </button>
          </form>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Mobile Menu & Search */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col gap-4 mt-2">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Home</Link>
            <Link to="/articles" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Artikel</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Tentang</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-500 transition">Kontak</Link>
            
            {/* Link Website Resmi Mobile */}
            <a
              href="https://perempuandigdaya.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              Website Resmi
            </a>

            {/* Search Form Mobile */}
            <form onSubmit={handleSearch} className="mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-2 py-1 border rounded focus:outline-none"
              />
              <button type="submit" className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                Cari
              </button>
            </form>
          </nav>
        </div>
      )}
    </header>
  );
}
