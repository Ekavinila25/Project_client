import React from "react"
import { Field, ErrorMessage } from "formik"

function Input(props) {
  const { name, label, ...rest } = props
  return (
    <div>
      <label htmlFor={name}> {label}</label>
      <Field name={name} {...rest} />
      <span className="text-danger">
        <ErrorMessage name={name} />
      </span>
    </div>
  )
}
export default Input;