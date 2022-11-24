import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // OAuth authentication providers
    // AppleProvider({
    //   clientId: process.env.APPLE_ID as string,
    //   clientSecret: process.env.APPLE_SECRET as string,
    // }),
    FacebookProvider({
      clientId: "803108087433834",
      clientSecret: "0d723574b40ef80cd7a340ab5a0393eb",
    }),
    GoogleProvider({
      clientId:
        "400941750760-dobsfrbb9cre3lriqi0nimif5b9prgc6.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // Sign in with passwordless email link
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: "<no-reply@example.com>",
    // }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
