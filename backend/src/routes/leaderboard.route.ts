import { Router } from 'express';
import { createScore, getTopScores } from '#controllers';
import { authMiddleware, validateZod } from '#middlewares';
import { leaderboardInputSchema } from '#schemas';

const leaderboardRouter = Router();

leaderboardRouter.get('/', getTopScores);
leaderboardRouter.post('/', authMiddleware, validateZod(leaderboardInputSchema), createScore);

export default leaderboardRouter;
