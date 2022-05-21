import { useQuery } from "react-query";
import { getHeaders } from "./toggl";

export const useTogglWorkspaces = (options) =>
  useQuery(
    ["toggl", "workspaces"],
    async () => {
      const workspaces = await fetch(
        `https://api.track.toggl.com/api/v8/workspaces`,
        {
          headers: getHeaders(),
        }
      );

      return await workspaces.json();
    },
    options
  );

export const useTogglWeeklyReport = ({ workspace_id, since }, options) =>
  useQuery(
    ["toggl", "report", "weekly"],
    async () => {
      const user_agent = "toggl-primetric-agent";

      const report = await fetch(
        `https://api.track.toggl.com/reports/api/v2/weekly?user_agent=${user_agent}&workspace_id=${workspace_id}&since=${since}`,
        { headers: getHeaders() }
      );

      return await report.json();
    },
    options
  );
