import { useEffect } from "react";
import { useActivityStore } from "./stores";
import { ActionButton, ActivityTable } from "./components";

function App() {
  const setActivities = useActivityStore((state) => state.setActivities);

  const fetchRandomActivities = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/random_activity?count=15&format=json`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setActivities(
          Array.isArray(data.random_activity) ? data.random_activity : []
        );
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

  return (
    <div className="h-screen w-full flex flex-col p-8">
      <ActionButton />
      <ActivityTable />
    </div>
  );
}

export default App;
