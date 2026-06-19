import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      isDark: false,
      toggle: () => {
        const next = !get().isDark;
        document.documentElement.setAttribute(
          "data-theme",
          next ? "dark" : "light",
        );
        set({ isDark: next });
      },
    }),
    {
      name: "app-theme",
      onRehydrateStorage: () => (s) => {
        if (s.isDark) {
          document.documentElement.setAttribute("data-theme", "dark");
        }
      },
    },
  ),
);
