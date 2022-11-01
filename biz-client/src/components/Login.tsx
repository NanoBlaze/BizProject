import { FunctionComponent } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { login } from "../services/usersService";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values: User) => {
      login(values)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You Logged in Successfully!");
          navigate("/home");
          // console.log(result.data[0]);
        })
        .catch((err) => {
          errorMsg("Somthing went Wrong, Try Again");
          console.log(err);
        });
    },
  });
  return (
    <>
      <div className=" p-5">
        <div className="shadow p-3 bg-light mb-5 rounded mx-auto w-50">
          <h1 className="text-center mt-3 p-font fs-1 text-dark">Login</h1>
          <div className="content ">
            <form className="mx-auto w-50" onSubmit={formik.handleSubmit}>
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
                  <p className="d-flex mt-1 text-danger">
                    * {formik.errors.email}
                  </p>
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
                  <p className="d-flex mt-1 text-danger">
                    * {formik.errors.password}
                  </p>
                ) : null}
              </div>
              <div className="form-group mt-4">
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  className="btn btn-success text-light w-100"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <p className="text-center mt-4 text-dark">
            Create Free User <i className="fa-solid fa-circle-chevron-right icon-size"></i>{" "}
            <Link  to="/register">
              Here
            </Link>
          </p>
            <p className="text-center ">
        Create Bussiness User <i className="fa-solid fa-circle-chevron-right icon-size"></i>{" "} <Link to="/biz-register">Here</Link>
         </p>
        </div>
      </div>
    </>
  );
};

export default Login;
