import { createEnv } from '@t3-oss/env-nextjs';
import * as v from 'valibot';

export const env = createEnv({
  server: {
    SPOTIFY_CLIENT_ID: v.string(),
    SPOTIFY_CLIENT_SECRET: v.string(),
    SPOTIFY_REFRESH_TOKEN: v.string(),
  },
  runtimeEnv: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
  },
});
