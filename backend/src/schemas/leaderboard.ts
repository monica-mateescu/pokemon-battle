import { z } from 'zod';
import { Types } from 'mongoose';

export const leaderboardInputSchema = z.strictObject({
  score: z
    .number({ error: 'Score must be a number' })
    .min(0, { error: 'Score must be a non-negative number' })
});

export const leaderboardSchema = z.strictObject({
  _id: z.instanceof(Types.ObjectId),
  userId: z.instanceof(Types.ObjectId),
  ...leaderboardInputSchema.shape,
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number()
});
