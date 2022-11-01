import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { addUser } from "../services/usersService";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values) => {
      let user: User = { ...values, isBiz: false };

      addUser(user)
        .then((result) => {
          // Save Token to session Storage
          sessionStorage.setItem("token", result.data.token);
          //   Toast Success Message
          successMsg("You Registerd Successfully!");
          navigate("/home");
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
          //   Toast Error Message
          errorMsg("Somthing went Wrong!");
        });
    },
  });
  return (
    <>
      <div className=" p-5">
        <div className="shadow p-3 bg-light mb-5 rounded mx-auto w-50">
          <h1 className="text-center mt-4">Register</h1>
          <div className="content">
            <form className="mx-auto w-50" onSubmit={formik.handleSubmit}>
              <div className="form-group mt-4 ">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-danger d-flex mt-1 text-danger">* { formik.errors.name}</p>
                ) : null}
              </div>
              <div className="form-group mt-4">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-danger d-flex mt-1 text-danger">* { formik.errors.email}</p>
                ) : null}
              </div>
              <div className="form-group mt-4">
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-danger d-flex mt-1 text-danger ">* {formik.errors.password}</p>
                ) : null}
              </div>

              <div className="form-group mt-4">
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn btn-success w-100"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <p className="text-center mt-3">
            Already Having Account{" "}
            <i className="fa-solid fa-circle-chevron-right icon-size"></i>{" "}
            <Link to="/">Login</Link>
          </p>
          <p className="text-center mt-3">
            Create Business Account{" "}
            <i className="fa-solid fa-circle-chevron-right icon-size"></i>{" "}
            <Link to="/biz-register"> Here</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
