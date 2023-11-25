import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "item";

export const OrderTitle = (record: TOrder): string => {
  return record.item?.toString() || String(record.id);
};
