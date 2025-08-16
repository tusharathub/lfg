export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <div className="text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Tired of asking your friends to{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            play with you
          </span>
          ??
        </h1>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
          We&apos;ve got a{" "}
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
            solution
          </span>
        </h1>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight">
          🎮 TeamMatcher
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
          Find teammates instantly. Join sessions, discover games, and never play alone again.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/create"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
             Create Session
          </a>
          <a
            href="/browse"
            className="px-8 py-4 rounded-2xl bg-gray-800 border border-gray-600 text-lg font-semibold hover:bg-gray-700 transition"
          >
             Browse Sessions
          </a>
        </div>
      </div>
    </main>
  );
}
