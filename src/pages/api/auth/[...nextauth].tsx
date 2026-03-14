import { getUserByEmail, signIn, signInWithGoogle } from "@/lib/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      fullname?: string;
      role?: string;
      image?: string;
    } & DefaultSession["user"];
  }

  interface User {
    fullname?: string;
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    fullname?: string;
    role?: string;
    picture?: string;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await signIn({ email });
        if (user) {
          const passwordConfirm = await compare(password, user.password);
          if (passwordConfirm) {
            const { passwordConfirm, ...userWithoutPassword } = user;
            return userWithoutPassword;
          }
          return null;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials") {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }

      if (account?.provider === "google") {
        await signInWithGoogle(
          { name: user.name, email: user.email, image: user.image },
          (result: any) => {
            if (result.status === true) {
              token.fullname = user.name;
              token.email = user.email;
              token.picture = user.image;
              token.role = "user";
            }
          },
        );
      }

      if(token.email) {
        const freshUser = await getUserByEmail(token.email);
        if(freshUser) {
          token.role = freshUser.role;
        }
      }

      return token;
    },

    async session({ session, token }: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("picture" in token) {
        session.user.image = token.picture;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
