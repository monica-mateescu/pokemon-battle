import { z } from 'zod';
import type { leaderboardInputSchema, leaderboardSchema } from '#schemas';

export type LeaderboardInputDTO = z.infer<typeof leaderboardInputSchema>;
export type LeaderbooardDTO = z.infer<typeof leaderboardSchema>;
