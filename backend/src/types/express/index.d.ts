declare global {
  namespace Express {
    export interface Request {
      user?: {
        id: string;
        name: string;
        lastName: string;
        image?: string | undefined | null;
        email: string;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
      };
    }
  }
}

export {};
