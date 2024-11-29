import { useEffect } from "react";

function App() {
  const fetchRandomActivities = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/random_activity?count=1&format=json`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to fetch activities:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  };

  useEffect(() => {
    fetchRandomActivities();
  }, []);

  return <div>Initial setup: Data is being fetched...</div>;
}

export default App;
