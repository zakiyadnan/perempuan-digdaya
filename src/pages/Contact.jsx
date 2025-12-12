// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="px-4 md:px-10 py-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600 mb-6">
        Kontak Perempuan Digdaya
      </h1>

      <p className="text-lg mb-6 text-center">
        Ada pertanyaan atau ingin bergabung? Hubungi kami melalui email atau WhatsApp di bawah ini.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        {/* Email */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
          <a
            href="mailto:info@perempuandigdaya.id"
            className="text-pink-500 hover:underline"
          >
            info@perempuandigdaya.id
          </a>
        </div>

        {/* WhatsApp */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h2>
          <a
            href="https://wa.me/6281283797799"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            +62 812-8379-7799 (Yetiriyad)
          </a>
          <a
            href="https://wa.me/628111663613"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline mt-2"
          >
            +62 811-1663-613 (Rawi)
          </a>
        </div>
      </div>

      {/* Optional: Simple contact form */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Kirim Pesan</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Pesan"
            className="border border-gray-300 rounded px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold rounded px-4 py-2 hover:bg-pink-600 transition"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
}
