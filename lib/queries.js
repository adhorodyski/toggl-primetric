import { useQuery } from "react-query";

export const useTogglWorkspaces = (options) =>
  useQuery(
    ["toggl", "workspaces"],
    async () => {
      const workspaces = await fetch("/api/toggl/workspaces");

      return await workspaces.json();
    },
    options
  );
