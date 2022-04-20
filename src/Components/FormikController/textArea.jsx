import React from "react"
import { Field, ErrorMessage } from "formik"

function TextArea(props) {
  const { label, name, ...rest } = props
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <span className="text-danger">
        <ErrorMessage name={name} />
      </span>
    </div>
  )
}
export default TextArea;