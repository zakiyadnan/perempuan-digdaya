export default function About() {
  return (
    <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto text-gray-800">
      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-8">
        Tentang Perempuan Digdaya
      </h1>

      {/* Paragraf pembuka */}
      <p className="text-lg mb-6 leading-relaxed">
        Perempuan Digdaya adalah komunitas yang hadir untuk memberdayakan perempuan dengan memanfaatkan kekuatan teknologi digital. 
        Kami berkomitmen untuk membantu perempuan meningkatkan keterampilan, percaya diri, dan kapasitas diri di era digital modern.
      </p>

      {/* Pilar utama */}
      <p className="mb-4 leading-relaxed">
        Dengan tagline <span className="font-semibold text-pink-500">#PerempuanDigdaya “Digital & Berdaya”</span>, organisasi berfokus pada tiga pilar utama:
      </p>

      <ul className="list-disc list-inside space-y-3 mb-6 text-gray-700">
        <li>
          <span className="font-semibold">Edukasi (Educating)</span> – Memberikan pelatihan dan materi belajar untuk mengembangkan keterampilan digital dan profesional.
        </li>
        <li>
          <span className="font-semibold">Pemberdayaan (Empowering)</span> – Membantu perempuan menjadi mandiri, percaya diri, dan siap menghadapi tantangan karier dan bisnis.
        </li>
        <li>
          <span className="font-semibold">Jaringan (Networking)</span> – Membangun hubungan antar perempuan untuk berbagi pengalaman, kolaborasi, dan peluang baru.
        </li>
      </ul>

      {/* Paragraf tambahan */}
      <p className="mb-6 leading-relaxed">
        Komunitas ini terbuka untuk semua perempuan dari berbagai latar belakang, baik di Indonesia maupun luar negeri. Anggota dapat mengikuti program belajar, workshop, mentoring, dan kegiatan komunitas yang dirancang khusus untuk meningkatkan keterampilan dan dampak sosial mereka.
      </p>

      <p className="mb-6 leading-relaxed text-gray-700">
        Dengan sistem edukasi yang modern, inklusif, dan penuh semangat, Perempuan Digdaya ingin menunjukkan bahwa setiap perempuan punya potensi luar biasa untuk menjadi pemimpin, inovator, dan pembawa perubahan di komunitasnya maupun secara lebih luas.
      </p>

      {/* CTA */}
      <div className="text-center mt-10">
        <a
          href="https://perempuandigdaya.id/daftar-member/"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daftar Menjadi Member
        </a>
      </div>
    </div>
  );
}
