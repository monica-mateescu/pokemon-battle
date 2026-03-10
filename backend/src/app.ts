import '#db';
import express from 'express';
import cors from 'cors';
import { CLIENT_BASE_URL } from '#config';
import { toNodeHandler } from 'better-auth/node';
import { auth } from '#utils';
import { authRouter, leaderboardRouter } from '#routes';
import { errorHandler, notFoundHandler } from '#middlewares';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({ origin: CLIENT_BASE_URL, credentials: true, methods: ['GET', 'POST', 'PUT', 'DELETE'] })
);

app.all('/api/auth/*splat', toNodeHandler(auth));
app.use('/api', authRouter);

app.use(express.json());

app.use('/api/leaderboard', leaderboardRouter);

app.use('/*splat', notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
