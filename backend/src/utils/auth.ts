import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import {
  MONGO_URI,
  DB_NAME,
  CLIENT_BASE_URL,
  BETTER_AUTH_SECRET,
  DOMAIN,
  EMAIL_FROM
} from '#config';
import { verifyEmail } from '#templates';
import { resend } from '#services';

const client = new MongoClient(MONGO_URI);
const db = client.db(DB_NAME);

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  secret: BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true
  },
  emailVerification: {
    sendOnSignUp: true,
    async sendVerificationEmail({ user, token }) {
      resend.emails.send({
        from: `Pokémon Battel <${EMAIL_FROM}>`,
        to: user.email,
        subject: 'Please confirm your email address',
        html: verifyEmail({
          name: user.name,
          url: `${CLIENT_BASE_URL}/verify-email?token=${token}`
        })
      });
    }
  },
  baseURL: CLIENT_BASE_URL,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60
    }
  },
  user: {
    fields: {
      name: 'firstName',
      image: 'avatarUrl'
    },
    additionalFields: { lastName: { type: 'string' } }
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: 'none',
      secure: true
    },
    crossSubDomainCookies: {
      enabled: true,
      domain: DOMAIN
    }
  }
});
