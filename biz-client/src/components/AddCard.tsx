import { FunctionComponent } from "react";
import * as yup from "yup";
import { errorMsg, successMsg } from "../services/feedbacksService";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { addCard } from "../services/cardsService";
import Navbar from "./Navbar";

interface AddCardProps {
    
}
 
const AddCard: FunctionComponent<AddCardProps> = () => {
const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: 0,
      address: "",
      description: "",
      image: "",
    },
   validationSchema: yup.object({
  name: yup.string().required().min(2),
  phone: yup.number().required().min(0),
  address: yup.string().required().min(2),
  description: yup.string().required().min(2),
  image: yup.string().required().min(2),
}),

    onSubmit: (values) => {
      addCard(values)
        .then((result) => {
          //   Toast Success Message
          successMsg("Porduct added");
          navigate("/cards");
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
          //   Toast Error Message
          errorMsg("Somthing went Wrong!");
        });
    },
  });
    return ( <>
    <Navbar />
              <div className="wrapper">
        <div className="main2 ">
   <h1 className="text-home-banner py-5">Add Card</h1>
        </div>
      </div>
      <div className="content">
        <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
          <div className="form-group mt-4 ">
            <input
              className="form-control"
              id="inputName"
              type="text"
              placeholder="Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-danger">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              id="inputPhone"
              type="number"
              placeholder="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <p className="text-danger">{formik.errors.phone}</p>
            ) : null}
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              id="inputAddress"
              type="text"
              placeholder="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address ? (
              <p className="text-danger ">{formik.errors.address}</p>
            ) : null}
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              id="description"
              type="text"
              placeholder="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <p className="text-danger ">{formik.errors.description}</p>
            ) : null}
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              id="image"
              type="text"
              placeholder="image"
              name="image"
              value={formik.values.image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.image && formik.errors.image ? (
              <p className="text-danger ">{formik.errors.image}</p>
            ) : null}
          </div>


          <div className="form-group mt-4">
            <button
              disabled={!(formik.isValid && formik.dirty)}
              className="btn btn-success w-100"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

      </div>
    </> );
}
 
export default AddCard;