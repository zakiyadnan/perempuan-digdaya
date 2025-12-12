import ArticleSlider from "../components/ArticleSlider";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";

export default function Home() {
  return (
    <div className="p-4 md:p-10">
      {/* Slider */}
      <ArticleSlider />

      {/* Grid Artikel Terbaru */}
      <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800">
        Artikel Terbaru
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
