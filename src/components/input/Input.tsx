import React from "react";
import { Input as AntInput, InputNumber, InputProps } from "antd";


type CompoundedType = typeof Input & {
  Group: typeof AntInput.Group;
  Search: typeof AntInput.Search;
  TextArea: typeof AntInput.TextArea;
  Password: typeof AntInput.Password;
  InputNumber: typeof InputNumber;
}

const Input = React.forwardRef(
  (
    props: InputProps,
    ref: React.ForwardedRef<any>
  ) => {
    return <AntInput {...props} ref={ref} />
  }
);

const InputCompounded = Input as CompoundedType;

InputCompounded.Group = AntInput.Group;
InputCompounded.Search = AntInput.Search;
InputCompounded.TextArea = AntInput.TextArea;
InputCompounded.Password = AntInput.Password;
InputCompounded.InputNumber = InputNumber;

export default InputCompounded;