import { useEffect, useState } from "react";
import Papa from "papaparse";

type Activity = {
  activity: string;
  availability: number;
  type: string;
  participants: number;
  price: number;
  accessibility: string;
  duration: string;
  kidFriendly: boolean;
  link: string;
  key: string;
};

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const fetchRandomActivities = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/random_activity?count=1&format=json`
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
    <div>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Availability</th>
            <th>Type</th>
            <th>Participants</th>
            <th>Price</th>
            <th>Accessibility</th>
            <th>Duration</th>
            <th>Kid-Friendly</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.activity}</td>
              <td>{activity.availability}</td>
              <td>{activity.type}</td>
              <td>{activity.participants}</td>
              <td>{activity.price}</td>
              <td>{activity.accessibility}</td>
              <td>{activity.duration}</td>
              <td>{activity.kidFriendly ? "Yes" : "No"}</td>
              <td>{activity.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={printToConsole}>Print to Console</button>
        <button onClick={downloadJSON}>JSON Download</button>
        <button onClick={downloadCSV}>CSV Download</button>
      </div>
    </div>
  );
}

export default App;
