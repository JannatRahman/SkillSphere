import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-md w-full text-center border border-pink-200">
        <div className="text-7xl mb-4">🎀</div>

        <h1 className="text-6xl font-bold text-pink-500">404</h1>
        <h2 className="text-2xl font-semibold text-pink-400 mt-2">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-4">
          The page you're looking for seems to have gone on a little pink adventure 💕
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-pink-400 text-white font-medium rounded-full shadow-md hover:bg-pink-500 transition"
        >
          Back to Home
        </Link>

        <div className="mt-8 text-4xl">🌸 🩷 ✨</div>
      </div>
    </div>
  );
}
