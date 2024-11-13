import React, { useState } from "react";

function GamePage() {
  const [ballColor, setBallColor] = useState("blue"); // Initial color
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state

  const handleColorChange = () => {
    setIsAnimating(true); // Start the animation

    // Add a delay for animation effect
    setTimeout(() => {
      // 50% chance to change color to red or blue
      const newColor = Math.random() < 0.5 ? "blue" : "red";
      setBallColor(newColor);
      setIsAnimating(false); // End the animation
    }, 500); // Animation duration
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Game Screen</h2>

      <div
        className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-3xl transition-all duration-500 ${
          isAnimating ? "scale-125 opacity-50" : "scale-100 opacity-100"
        }`}
        style={{
          backgroundColor: ballColor === "blue" ? "#007BFF" : "#FF4136",
        }}
      >
        {ballColor.charAt(0).toUpperCase() + ballColor.slice(1)}
      </div>

      <button
        onClick={handleColorChange}
        className="mt-8 bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-200"
      >
        View Your Next Ball
      </button>
    </div>
  );
}

export default GamePage;
