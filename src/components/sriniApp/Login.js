import React from "react";
import { Formik, Form } from "formik";
import MyTextInput from "../someComponents/MyTextInput";
import * as Yup from "yup";

function Login() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(25, "Must be 25 characters or less")
          .required("Required"),
        password: Yup.string()
          .min(8, "Must be atleast 8 characters")
          .max(40, "Must be 40 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(
          async () => {
            console.log(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          },
          3000,
          (window.location.href = `/clients`)
        );
        console.log(values);
        sessionStorage.setItem("username", values.username);
        //       window.location.href = `/clients/${values.username}`
      }}
    >
      {(props) => (
        <Form>
          <div className="py-5 text-center">
            <h2 className="font-weight-bold">SRINI</h2>
          </div>
          <div className="mb-3">
            <MyTextInput
              label="Username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <hr className="mb4" />
          <div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              {props.isSubmitting ? "loading..." : "Log in"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

/* function Login() {
  return (
    <div className="container">
      
      <div className="py-5 text-center">
        <h2>Srini login</h2>
      </div>
      <div>
        <Formik
          initialValues={{ username: "malle", password: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            
            window.location.href = `/clients/${values.username}`
            console.log(values);
          }}
        >
          <div className="col-md-12 order-md-1">

            <Form>
              <div className="mb-3">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                />
              </div>
              <hr className="mb4" />
              <div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  
                  Log in
                </button>
              </div>
            </Form>
            
          </div>
        </Formik>
      </div>
    </div>
  );
} */

/* function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    hasLoginFailed: false,
    showSuccessfulMessage: false,
  });

  function handleChange(event) {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
    /*     onSubmitLogin({ ...user }); */
/*}

  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr>
              <td>Username: </td>
              <td>
                <input
                  name="username"
                  type="text"
                  value={user.username}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Password: </td>
              <td>
                <input
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <button onClick={loginClicked}>Login</button>
      <div>
        {!user.showSuccessfulMessage && (
          <span>Vale kasutajanimi või parool</span>
        )}
        {user.showSuccessfulMessage && <span>Sisselogimine õnnestus!</span>}
      </div>
    </div>
  );
  function loginClicked() {
    if (user.username === "testuser" && user.password === "dummy") {
      setUser({
        showSuccessfulMessage: true,
        hasLoginFailed: false,
      });
      console.log({ ...user });
      console.log("successful!");
    } else {
      setUser({
        showSuccessfulMessage: false,
        hasLoginFailed: true,
      })
      console.log({ ...user });
      console.log("Wrong information");
    }
  }
}

Login.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    showSuccessfulMessage: PropTypes.bool,
    hasLoginFailed: PropTypes.bool,
  }),
  /*   onSubmitLogin: PropTypes.func.isRequired, */
/*};
Login.defaultProps = { user: {} };  */

export default Login;
