import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  item?: string | null;
  user?: UserWhereUniqueInput | null;
};
