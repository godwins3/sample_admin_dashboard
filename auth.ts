import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { apiRoute } from './utils/apiRoutes';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const response = await fetch(apiRoute.login, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: process.env.s!,
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
            
                const data = await response.json();
            
                if (response.ok && data.status !== 'failed') {
                    // Assuming the API returns user data when successful
                    return {
                        id: data._id,
                        token: data.token,
                        licenseId: data.licenseId,
                        email: data.email,
                        name: data.name,
                        image: data.image,
                    };
                } else {
                    return null;
                }
            },
            
        }),
    ],
    callbacks: {
        session({ session, token }) {
            session.user.id = token.id;
            session.user.token = token.token;
            session.user.licenseId = token.licenseId;
            return session;
        },
        jwt({ token, trigger, session, account, user }) {
            if (account) {
                token.accessToken = account.access_token;
                if ('_id' in user) token.id = user._id;
                if ('token' in user) token.token = user.token;
                if ('licenseId' in user) token.licenseId = user.licenseId;
            }
            if (trigger === 'update' && session?.licenseId) {
                token.licenseId = session.licenseId;
            }
            return token;
        },
    },
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET!,
};
