import { FunctionComponent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCard, getCard } from "../services/cardsService";
import * as yup from "yup";
import { useFormik } from "formik";
import { errorMsg, successMsg } from "../services/feedbacksService";
import Navbar from "./Navbar";
import { Card } from "../interfaces/Card";


interface EditCardProps {}

const EditCard: FunctionComponent<EditCardProps> = () => {
  const { id } = useParams();
  const [card, setCard] = useState({
    name: "",
    phone: 0,
    address: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    getCard(id as string)
      .then((result) => setCard(result.data))
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: card.name,
      phone: card.phone,
      address: card.address,
      description: card.description,
      image: card.image,
    },
    enableReinitialize: true,
    validationSchema: yup.object({
      name: yup.string().required().min(2),
      phone: yup.number().required().min(0),
      address: yup.string().required().min(2),
      description: yup.string().required().min(2),
      image: yup.string().required().min(2),
    }),
    onSubmit: (values) => {
      let card: Card = { ...values, _id: id as string };
      editCard(card)
        .then((result) => {
          console.log(result.data);
          successMsg("Card was added successfully!");
          navigate("/cards");
        })
        .catch((error) => {
          console.log(error);
          errorMsg("Oops...something went wrong..");
        });
    },
  });
  return (
    <>
      <Navbar />
                <div className="wrapper">
        <div className="main2 ">
   <h1 className="text-home-banner py-5">Edit Cards</h1>
        </div>
      </div>
      
      <div className="content">
        <form className="mx-auto w-25" onSubmit={formik.handleSubmit}>
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
              <p className="text-danger">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              id="phone"
              type="number"
              placeholder="Price"
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
              id="address"
              type="text"
              placeholder="Category"
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
              placeholder="Description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <p className="text-danger ">{formik.errors.address}</p>
            ) : null}
            <div className="form-group mt-4">
              <input
                className="form-control"
                id="image"
                type="text"
                placeholder="Image"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.image && formik.errors.image ? (
                <p className="text-danger ">{formik.errors.image}</p>
              ) : null}
            </div>
          </div>
          <div className="form-group mt-4">
            <button
              disabled={!(formik.isValid && formik.dirty)}
              className="btn btn-success w-100"
              type="submit"
            >
              Done
            </button>
          </div>
        </form>
      </div>
     
    </>
  );
};

export default EditCard;
