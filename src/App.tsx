import { useEffect } from "react";
import Papa from "papaparse";
import { useActivityStore } from "./stores";
import { ActivityTable } from "./components";

function App() {
  const activities = useActivityStore((state) => state.activities);
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

  const printToConsole = () => {
    console.log(activities);
  };

  const downloadJSON = () => {
    const blob = new Blob([JSON.stringify(activities, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "activities.json";
    a.click();
  };

  const downloadCSV = () => {
    const csv = Papa.unparse(activities);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "activities.csv";
    a.click();
  };

  return (
    <div className="h-screen p-8">
      <div>
        <button onClick={printToConsole}>Print to Console</button>
        <button onClick={downloadJSON}>JSON Download</button>
        <button onClick={downloadCSV}>CSV Download</button>
      </div>
      <ActivityTable />
    </div>
  );
}

export default App;
