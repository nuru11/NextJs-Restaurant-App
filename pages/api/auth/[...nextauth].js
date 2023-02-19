import bcryptjs from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../utils/models/userModel';
import mongoose from 'mongoose';

console.log(".lllllllllllll")
export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log("nnnnnnn")
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      console.log("tooken  " + JSON.stringify(token.isAdmin))
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      console.log("uuuuuser  " + console.log(JSON.stringify(session.user.name)))
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await mongoose.connect(process.env.MONGODB_URI);
         console.log("cccccone")
        const user = await User.findOne({
          email: credentials.email,
        });
        await mongoose.disconnect(process.env.MONGODB_URI);
        if (user && bcryptjs.compareSync(credentials.password, user.password)) {
          return {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          };
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: "secret", 
  database: process.env.MONGODB_URI
});

