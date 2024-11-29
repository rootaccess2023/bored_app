import { create } from "zustand";
import { Activity } from "../types";

interface ActivityStore {
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities }),
}));
