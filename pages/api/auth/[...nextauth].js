import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    {
      id: "primetric",
      name: "Primetric",
      type: "oauth",
      clientId: process.env.PRIMETRIC_CLIENT_ID,
      clientSecret: process.env.PRIMETRIC_CLIENT_SECRET,
      authorization: "https://api.primetric.com/auth/authorize/",
      token: "https://api.primetric.com/auth/token/",
      userinfo: "https://app.primetric.com/api/user/",
      profile({ account }) {
        return {
          id: account?.person_uuid,
          name: account?.username,
          email: account?.email,
          image: account?.avatar,
        };
      },
    },
  ],
});
