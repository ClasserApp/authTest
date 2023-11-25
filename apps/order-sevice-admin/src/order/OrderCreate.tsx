import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="item" source="item" />
        <TextInput label="user id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
