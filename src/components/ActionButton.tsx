import { useActivityStore } from "../stores";
import { downloadCSV, downloadJSON, printToConsole } from "../utils";

export function ActionButton() {
  const activities = useActivityStore((state) => state.activities);
  return (
    <div>
      <button
        onClick={() => downloadCSV(activities)}
        type="button"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        To CSV
      </button>
      <button
        onClick={() => downloadJSON(activities)}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        To JSON
      </button>
      <button
        onClick={() => printToConsole(activities)}
        type="button"
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Print Console
      </button>
    </div>
  );
}
