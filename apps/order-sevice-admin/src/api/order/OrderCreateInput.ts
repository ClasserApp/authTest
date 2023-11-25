import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  item?: string | null;
  user?: UserWhereUniqueInput | null;
};
