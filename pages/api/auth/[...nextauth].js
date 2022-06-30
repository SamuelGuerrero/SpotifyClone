import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify";

async function refresAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accesToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refresedToken } = await spotifyApi.refreshAccessToken();
    console.log("Refreshed token is: ", refresedToken);

    return {
      ...token,
      accesToken: refresedToken.access_token,
      accesTokenExpires: Date.now + refresedToken.expires_in * 1000,
      refreshToken: refresedToken.refresh_token ?? token.refresh_token,
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accesToken: account.acces_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accesTokenExpires: account.expires_at * 1000,
        };
      }

      if (Date.now() < token.accesTokenExpires) {
        console.log("Existing access token is valid.");
        return token;
      }

      console.log("Acces token has expired, refreshing...");
      return await refresAccessToken(token);
    },

    async session({ session, token }) {
      session.user.accesToken = token.accesToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
