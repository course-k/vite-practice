import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

interface MyFormValues {
  userName: string;
  email: string;
  favoriteColor: string;
}

interface Props {
  fieldName: string;
  label: string;
}

const MyTextField: React.FC<Props> = ({ fieldName, label }) => {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <Field id={fieldName} name={fieldName} type="text" />
      <ErrorMessage name={fieldName} component="div" className="error" />
    </div>
  );
};

const MySelectField: React.FC<Props> = ({ fieldName, label }) => {
  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <Field id={fieldName} name={fieldName} as="select">
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </Field>
      <ErrorMessage name={fieldName} component="div" className="error" />
    </div>
  );
};

const MyForm: React.FC = () => {
  const [userNameState, setUserNameState] = useState("John");
  return (
    <>
      <select
        name="selectUserName"
        onChange={(e) => setUserNameState(e.target.value)}
      >
        <option value={"John"}>John</option>
        <option value={"Kevin"}>Kevin</option>
      </select>
      <Formik<MyFormValues>
        initialValues={{
          userName: userNameState,
          email: "",
          favoriteColor: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          favoriteColor: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        enableReinitialize={true}
      >
        {({ isSubmitting }) => (
          <Form>
            <MyTextField fieldName="userName" label="User Name" />
            <MyTextField fieldName="email" label="Email" />
            <MySelectField fieldName="favoriteColor" label="Favorite Color" />

            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MyForm;
