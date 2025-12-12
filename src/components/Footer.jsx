import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between">
        
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-white">
            Perempuan <span className="text-pink-500">Digdaya</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">Empowering women everywhere</p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col gap-2">
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
        </div>

        {/* Sosial Media */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="https://instagram.com/perempuandigdaya" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Instagram</a>
          <a href="https://facebook.com/perempuandigdaya" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Facebook</a>
          <a href="https://twitter.com/perempuandigdaya" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">Twitter</a>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2025 Perempuan Digdaya. All rights reserved.
      </div>
    </footer>
  );
}
