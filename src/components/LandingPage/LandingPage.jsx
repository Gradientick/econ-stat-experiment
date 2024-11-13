import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">
        Econ Stat Experiment
      </h1>

      {/* Start Game Button */}
      <Link to="/game">
        <button className="bg-gray-300 text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors duration-200">
          Start Game
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
