import TogglClient from "toggl-api";

export const togglClient = new TogglClient({
  apiToken: process.env.NEXT_PUBLIC_TOGGL_API_TOKEN,
});
