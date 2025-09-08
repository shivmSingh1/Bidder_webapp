import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { signupInitialValues, signupValidationSchema } from "../../utils/formikValidations";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";

function Signup() {
  const [isHide, setIsHide] = useState(false)
  const dispatch = useDispatch()

  const handleSignupSubmit = (values) => {
    const payload = {
      firstName:values.firstName,
      lastName:values.lastName,
      password:values.password,
      confirmPassword:values.confirmPassword,
      email:values.email
    }
    dispatch(registerUser(payload))
  };

  const signupFormik = useFormik({
    initialValues: signupInitialValues,
    validationSchema: signupValidationSchema,
    onSubmit: handleSignupSubmit,
  });

  return (
    <div className="container">
     <div className="d-flex align-items-center justify-content-between" >
      <div>
 <Form className="mt-5" onSubmit={signupFormik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter Firstname"
            value={signupFormik.values.firstName}
            onChange={signupFormik.handleChange}
            onBlur={signupFormik.handleBlur}
          />
        </Form.Group>
        {signupFormik.touched.firstName && signupFormik.errors.firstName && <p style={{ color: "red" }} >{signupFormik.errors.firstName}</p>}

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter Lastname"
            value={signupFormik.values.lastName}
            onChange={signupFormik.handleChange}
            onBlur={signupFormik.handleBlur}
          />
        </Form.Group>
        {signupFormik.touched.lastName && signupFormik.errors.lastName && <p style={{ color: "red" }} >{signupFormik.errors.lastName}</p>}

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Lastname"
            value={signupFormik.values.email}
            onChange={signupFormik.handleChange}
            onBlur={signupFormik.handleBlur}
          />
        </Form.Group>
        {signupFormik.touched.email && signupFormik.errors.email && <p style={{ color: "red" }} >{signupFormik.errors.email}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="position-relative">
            <Form.Control
              type={isHide ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={signupFormik.values.password}
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
            />
            <FaRegEyeSlash
              className={`position-absolute end-0 top-50 translate-middle-y me-2 ${isHide ? "d-block" : "d-none"}`}
              onClick={() => setIsHide(false)}
            />

            <FaRegEye
              className={`position-absolute end-0 top-50 translate-middle-y me-2 ${isHide ? "d-none" : "d-block"}`}
              onClick={() => setIsHide(true)}
            />
          </div>
        </Form.Group>
        {signupFormik.touched.password && signupFormik.errors.password && <p style={{ color: "red" }} >{signupFormik.errors.password}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={signupFormik.values.confirmPassword}
            onChange={signupFormik.handleChange}
            onBlur={signupFormik.handleBlur}
          />
        </Form.Group>
        {signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword && <p style={{ color: "red" }} >{signupFormik.errors.confirmPassword}</p>}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      <div>
          <p>already have an account ? <Link to={"/auth/signin"} >Sign in</Link> </p>
      </div>
     </div>
    </div>
  );
}

export default Signup;
