"use client";  // <-- add this line at the top

export default function Home() {
  return (
    <div>
      <h1>Welcome to TripBuddy!</h1>
      <p>Plan your trips, find destinations, and enjoy your journey!</p>
      <button onClick={() => alert("Start your trip!")}>
        Start Planning
      </button>
    </div>
  );
}
