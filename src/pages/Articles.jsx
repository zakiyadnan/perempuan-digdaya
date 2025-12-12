import { useLocation } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles.json";

export default function Articles() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword") || ""; // fallback aman

  const filteredArticles = keyword
    ? articles.filter((a) => {
        const kws = a.keywords || [];
        return (
          kws.some((k) =>
            k.toLowerCase().includes(keyword.toLowerCase())
          ) ||
          a.title.toLowerCase().includes(keyword.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(keyword.toLowerCase())
        );
      })
    : articles;

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {keyword ? `Artikel: #${keyword}` : "Semua Artikel"}
      </h1>

      {filteredArticles.length === 0 ? (
        <p className="text-gray-600">Tidak ada artikel ditemukan.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
