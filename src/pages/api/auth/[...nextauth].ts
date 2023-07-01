import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

// NextAuth configuration options https://next-auth.js.org/configuration/options
const options: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    })
  ],
  secret: process.env.NEXTAUTH_SECRET as string
};

export default NextAuth(options);
