import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

interface MyFormValues {
  userName: string;
  email: string;
  favoriteColor: string;
}

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
            <div>
              <label htmlFor="userName">userName</label>
              <Field id="userName" name="userName" type="text" />
              <ErrorMessage name="userName" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="favoriteColor">Favorite Color</label>
              <Field id="favoriteColor" name="favoriteColor" as="select">
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </Field>
              <ErrorMessage
                name="favoriteColor"
                component="div"
                className="error"
              />
            </div>

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
