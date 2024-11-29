import Papa from "papaparse";
import { Activity } from "../types";
export const printToConsole = (activities: Activity[]) => {
  console.log(activities);
};

export const downloadJSON = (activities: Activity[]) => {
  const blob = new Blob([JSON.stringify(activities, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "activities.json";
  a.click();
};

export const downloadCSV = (activities: Activity[]) => {
  const csv = Papa.unparse(activities);
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "activities.csv";
  a.click();
};
