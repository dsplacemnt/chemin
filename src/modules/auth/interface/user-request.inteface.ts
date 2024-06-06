export interface RequestWithUser extends Request {
  user: {
    id: number;
    email: string;
  };
}
