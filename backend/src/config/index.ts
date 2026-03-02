import { z } from 'zod';

const envSchema = z.object({
  MONGO_URI: z.url({ protocol: /mongodb/ }),
  DB_NAME: z.string(),
  POKEMON_API_BASE_URL: z.string(),
  CLIENT_BASE_URL: z.url(),
  BETTER_AUTH_SECRET: z.string()
});

const { data, error, success } = envSchema.safeParse(process.env);
if (!success) {
  console.error('Invalid environment variables:', z.prettifyError(error));
  process.exit(1);
}

export const { MONGO_URI, DB_NAME, POKEMON_API_BASE_URL, CLIENT_BASE_URL, BETTER_AUTH_SECRET } =
  data;
