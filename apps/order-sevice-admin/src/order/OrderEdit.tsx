import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="item" source="item" />
        <TextInput label="user id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
