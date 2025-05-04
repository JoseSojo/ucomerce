import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import prisma from '@/infrastructure/lib/prisma'; // Ensure you have prisma set up

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
      
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
      
          if (!user) return null;
      
          const isPasswordValid = await bcrypt.compare(
            credentials.password, 
            user.password
          );
          
          return isPasswordValid 
            ? { 
                id: user.id.toString(), 
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone
              } 
            : null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    }),
  ],
  session: {
    strategy: 'jwt' as const, // Using JWT for session management
  },
  pages: {
    signIn: '/auth/signin', // Customize your sign-in page if necessary
  },
  callbacks: {
    async jwt({ token, user }: { token:any, user:any }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.firstName = user.firstName
        token.lastName = user.lastName
        token.phone = user.phone
      }
      return token
    },
    async session({ session, token }: { token:any, session:any }) {
      if (token) {
        session.user.id = token.id
        session.user.email = token.email
        session.user.firstName = token.firstName
        session.user.lastName = token.lastName
        session.user.phone = token.phone
      }
      return session
    },
  },
  secret: process.env.JWT_SECRET || 'your_secret_key', // Optional, specify a JWT secret
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
