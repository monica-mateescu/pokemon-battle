import { Leaderboard } from '#models';
import type { LeaderboardInputDTO, LeaderbooardDTO } from '#types';
import type { RequestHandler } from 'express';

export const getTopScores: RequestHandler<{}, LeaderbooardDTO[]> = async (req, res) => {
  const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10).populate('userId');
  res.json(leaderboard);
};

export const createScore: RequestHandler<{}, LeaderbooardDTO, LeaderboardInputDTO> = async (
  req,
  res
) => {
  const { user } = req;
  const leaderboard = await Leaderboard.create({ ...req.body, userId: user?.id });

  res.status(201).json(leaderboard);
};
