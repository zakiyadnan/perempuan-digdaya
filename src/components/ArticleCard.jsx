import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articles/${article.id}`}>
      <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
          <p className="text-gray-600 text-sm">{article.excerpt}</p>
          <div className="mt-2 flex gap-2 flex-wrap">
            {(article.keywords || []).map((kw) => (
              <span
                key={kw}
                className="px-2 py-1 text-xs bg-pink-100 text-pink-600 rounded cursor-pointer hover:bg-pink-200"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
