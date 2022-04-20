import React from "react";
import Input from "./input";
import TextArea from "./textArea";
import Select from "./select";

function FormikController(props) {
  const { control, ...rest } = props
  switch (control) {
    case "input":
      return <Input {...rest} />
    case "textArea":
      return <TextArea {...rest} />
    case "select":
      return <Select {...rest} />
    default:
      return null
  }
}
export default FormikController