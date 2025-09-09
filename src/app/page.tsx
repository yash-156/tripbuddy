"use client";

import { useState } from "react";

export default function Home() {
  const [trips, setTrips] = useState<string[]>([
    "Paris 🇫🇷",
    "Tokyo 🇯🇵",
    "New York 🇺🇸",
  ]);

  const [newTrip, setNewTrip] = useState("");

  const addTrip = () => {
    if (newTrip.trim() !== "") {
      setTrips([...trips, newTrip]);
      setNewTrip("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Welcome to TripBuddy!
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Plan your trips, find destinations, and enjoy your journey!
      </p>

      {/* Add new trip */}
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Enter a new destination"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={newTrip}
          onChange={(e) => setNewTrip(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={addTrip}
        >
          Add Trip
        </button>
      </div>

      {/* Display trips */}
      <div className="grid gap-4 w-full max-w-md">
        {trips.map((trip, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-4 text-center font-medium text-gray-700"
          >
            {trip}
          </div>
        ))}
      </div>

      {/* Example Start Planning button */}
      <button
        className="mt-8 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition font-semibold"
        onClick={() => alert("Start planning your trip!")}
      >
        Start Planning
      </button>
    </div>
  );
}

