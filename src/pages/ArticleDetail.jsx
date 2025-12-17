import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import articles from "../data/articles.json";
import ArticleCard from "../components/ArticleCard";

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((a) => a.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) return <p className="p-10">Artikel tidak ditemukan</p>;

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="p-4 md:p-10 max-w-4xl mx-auto">
      
      {/* ================= THUMBNAIL (BLUR PINGGIRAN) ================= */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">

        {/* Background blur (isi kiri-kanan, TIDAK PUTIH) */}
        <img
          src={article.thumbnail}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-90"
        />

        {/* Overlay lembut agar rapi */}
        <div className="absolute inset-0 bg-white/40" />

        {/* Gambar utama (UTUH, tidak kepotong) */}
        <img
          src={article.thumbnail}
          alt={article.title}
          className="relative z-10 w-full h-full object-contain"
        />
      </div>
      {/* =============================================================== */}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        {article.title}
      </h1>

      {/* Keywords */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(article.keywords || []).map((kw) => (
          <button
            key={kw}
            onClick={() =>
              navigate(`/articles?keyword=${encodeURIComponent(kw)}`)
            }
            className="px-2 py-1 bg-pink-100 text-pink-600 text-sm rounded hover:bg-pink-200 transition"
          >
            #{kw}
          </button>
        ))}
      </div>

      {/* Article Content */}
      <div className="prose prose-pink max-w-full">
        {article.content.split("\n\n").map((para, idx) => (
          <p key={idx} className="mb-4 leading-relaxed text-gray-700">
            {para
              .split(/(Perempuan Digdaya|Komunitas PeDe|Digital & Berdaya)/g)
              .map((part, i) =>
                ["Perempuan Digdaya", "Komunitas PeDe", "Digital & Berdaya"].includes(part) ? (
                  <span key={i} className="font-bold text-pink-600">
                    {part}
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
          </p>
        ))}
      </div>

      {/* Related Posts */}
      <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800">
        Artikel Lainnya
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {related.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
}
