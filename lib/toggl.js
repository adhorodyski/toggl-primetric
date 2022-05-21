export const getHeaders = () => ({
  Authorization: `Basic ${Buffer.from(
    `${process.env.NEXT_PUBLIC_TOGGL_API_TOKEN}:api_token`
  ).toString("base64")}`,
});
