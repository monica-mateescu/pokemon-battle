import { model, Schema, Types } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: [true, 'User ID is required'] },
    score: { type: Number, required: [true, 'Score is required'] }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret: any) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

export default model('Leaderboard', leaderboardSchema);
