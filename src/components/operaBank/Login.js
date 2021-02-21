import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Login = (props) => {
  const {touched, errors } = props;
  return (
    <React.Fragment
/*       onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(
          async () => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          },
          3000,
           // window.location.href = `/customers/${values.username}`
          
        );
        console.log(values);
        sessionStorage.setItem("username", values.username);
        //       window.location.href = `/clients/${values.username}`
      }} */
    >
      
        <Form>
          <div className="py-5 text-center">
            <h2 className="font-weight-bold">Company</h2>
          </div>
          <div className="mb-3">
            <Field
              label="Username"
              name="username"
              id="username"
              type="text"
              className="form-control"
              { ...touched.username && errors.username && <span className="help-block text-danger">{errors.username}</span> }
            />
          </div>
          <div className="mb-3">
            <Field
              label="Password"
              name="password"
              type="password"
              id="password"
              className="form-control"
              { ...touched.password && errors.password && <span className="help-block text-danger">{errors.password}</span> }
            />
          </div>
          <hr className="mb4" />
          <div className="row">
            <button type="login" className="btn btn-primary btn-lg btn-block">
{/*               {props.isSubmitting ? "loading..." : "Log in"} */}Login
            </button>
          </div>
        </Form>
      
    </React.Fragment>
  );
}

const LoginFormik = withFormik({
  mapPropsToValues : (props) => {
    return {
      username: props.username || '',
      password: props.password || '',
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    password: Yup.string()
      .min(3, "Must be atleast 3 characters")
      .max(40, "Must be 40 characters or less")
      .required("Required"),
  }),
  handleSubmit: (values) => {
    const url = '/login'
    fetch(url, {
      mode: 'no-cors',
      method: 'post',
      body: JSON.stringify(values)
    }).then(response=> {
      if (response.status === 302) {
        window.location.href = '/customers';
      } else {
        // HANDLE ERROR
        throw new Error('Something went wrong');
      }
    }).then(data => {
      // HANDLE RESPONSE DATA
      console.log("esimene"  + data);
    }).catch((error) => {
      // HANDLE ERROR
      console.log("teine" + error);
      console.log(values)
    });
  }

})(Login);

export default LoginFormik;
