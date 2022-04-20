import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import FormikController from "../FormikController"
import './style.scss';

function AddContact() {
  const choices = [
    { key: "choice a", value: "choicea" },
    { key: "choice b", value: "choiceb" },
  ]

  const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    mobile: '',
    owner: '',
    lifeCycleStage: '',
    source: '',
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    owner: Yup.string().required("Required"),
    lifeCycleStage: Yup.string().required("Required"),
    source: Yup.string().required("Required"),
  })
  const onSubmit = values => console.log("Form data", values)
  return (
    <div className="add-contact">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div className="row">
              <div className="col-lg-6 col-12">
                <FormikController
                  control="input"
                  type="text"
                  label="First Name"
                  name="firstName"
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-12">
                <FormikController
                  control="input"
                  type="text"
                  label="Last Name"
                  name="lastName"
                  className="form-control"
                />
              </div>
            </div>
            <FormikController
                control="input"
                type="text"
                label="Company"
                name="company"
                className="form-control"
              />
            <FormikController
              control="input"
              type="email"
              label="Email"
              name="email"
              className="form-control"
            />
            <FormikController
              control="input"
              type="text"
              label="Mobile"
              name="mobile"
              className="form-control"
            />
            <FormikController
              control="select"
              label="Owner"
              name="owner"
              options={choices}
              className="form-control"
            />
            <div className="row">
              <div className="col-lg-6 col-12">
                <FormikController
                  control="select"
                  label="Lifecycle Stage"
                  name="lifeCycleStage"
                  options={choices}
                  className="form-control"
                />
              </div>
              <div className="col-lg-6 col-12">
                <FormikController
                  control="select"
                  label="Source"
                  name="source"
                  options={choices}
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-primary my-3" type="submit">Save</button>
            <button className="btn btn-primary mx-3 my-3" type="submit">Save & New</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default AddContact;