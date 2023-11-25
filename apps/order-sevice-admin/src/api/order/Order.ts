import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  item: string | null;
  updatedAt: Date;
  user?: User | null;
};
